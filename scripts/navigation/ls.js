import { promises as fs } from "fs";

export const showTable = async () => {
  try {
    const dir = process.cwd();
    const array = (await fs.readdir(dir)).sort();
    const files = array.filter((item) => item.includes("."));

    const data = [];

    for (let i = 0; i < array.length; i++) {
      data.push({
        NAME: array[i],
        TYPE: array[i].includes(files[i]) ? "file" : "dir",
      });
    }
    console.log("\n");
    console.table(data);
  } catch (err) {
    throw new Error(`FS operation failed! Error: ${err}`);
  }
};
