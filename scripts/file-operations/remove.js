import fs from "fs";
import { check } from "../utils/check.js";

export const remove = (filePath = "") => {
  const path = filePath.split(" ").at(0) || "";
  const exist = check(path);

  if (exist) {
    console.log("\nDeleting file...");
    fs.unlink(path, () => {});
  } else {
    console.error(`\nFile does not exist!`);
  }
};
