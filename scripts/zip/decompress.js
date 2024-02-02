import fs from "fs";
import { createBrotliDecompress } from "zlib";
import { check } from "../utils/check.js";

export const decompress = async (line = "") => {
  const fileToDecompress = line.split(" ").at(0) || "";
  const pathToFile = line.split(" ").at(1) || "";

  const checkFileToDecompress = await check(fileToDecompress);
  // const checkPathToFile = await check(pathToFile);

  if (!checkFileToDecompress) {
    console.log(`File ${fileToDecompress} does not exist!`);
  } else if (pathToFile === "") {
    console.log(`Enter path for file to decompress.`);
  } else {
    console.log("Decompressing...");
    const readStream = fs.createReadStream(fileToDecompress);
    const writeStream = fs.createWriteStream(pathToFile);

    const brotli = createBrotliDecompress();

    const stream = readStream.pipe(brotli).pipe(writeStream);

    stream.on("error", (err) => {
      console.log("Error!", err);
    });
  }
};
