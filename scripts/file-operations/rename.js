import { promises as fs } from "fs";

export const rename = async (line = "") => {
  const oldPath = line.split(" ").at(0) || "";
  const newPath = line.split(" ").at(1) || "";

  try {
    await fs.rename(oldPath, newPath);
    console.log("\nFile renamed!");
  } catch (error) {
    console.log(error);
  }
};
