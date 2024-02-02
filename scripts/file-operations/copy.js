import fs from "fs";
import path from "path";
import { check } from "../utils/check.js";

export const copy = async (line = "") => {
  const oldPath = line.split(" ").at(0) || "";
  const folderName = line.split(" ").at(1) || "";

  const oldPathExist = await check(oldPath);
  if (oldPathExist) {
    const fileName = path.basename("copy_" + oldPath);
    const newPath = path.join(folderName, fileName);
    fs.createReadStream(oldPath).pipe(fs.createWriteStream(newPath));
    console.log("\nCopied successfully!");
  } else {
    console.log("\nFile not found!");
  }
  //
};
