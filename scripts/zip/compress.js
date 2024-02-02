import fs from "fs";
import { createBrotliCompress } from "zlib";
import { check } from "../utils/check.js";

export const compress = async (line = "") => {
  const fileToCompress = line.split(" ").at(0) || "";
  const pathToZip = line.split(" ").at(1) || "";

  const checkFileToCompress = await check(fileToCompress);

  if (!checkFileToCompress) {
    console.log(`File ${fileToCompress} does not exist!`);
  } else if (!pathToZip.length) {
    console.log(`Enter path for compressed file.`);
  } else {
    const readStream = fs.createReadStream(fileToCompress);
    const writeStream = fs.createWriteStream(pathToZip);

    const brotli = createBrotliCompress();
    const stream = readStream.pipe(brotli).pipe(writeStream);

    stream.on("error", () => {
      console.log("Error!");
    });
    stream.on("finish", () => {
      console.log("Compressed successfully!");
    });
  }
};
