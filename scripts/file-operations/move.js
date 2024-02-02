import fs from "fs";
import path from "path";
import { check } from "../utils/check.js";

export const move = async (line = "") => {
  const oldPath = line.split(" ").at(0) || "";
  const folderName = line.split(" ").at(1) || "";

  const oldPathExist = await check(oldPath);

  if (oldPathExist) {
    console.log("\nMoving file...");
    const fileName = path.basename(oldPath);
    const newPath = path.join(folderName, fileName);

    fs.createReadStream(oldPath)
      .pipe(fs.createWriteStream(newPath))
      .addListener("finish", () => fs.unlink(oldPath, () => {}))
      .addListener("error", (err) => console.log(err));
  } else {
    console.log("\nWrong path!");
  }
};
