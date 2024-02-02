import fs from "fs";
import crypto from "crypto";
import { check } from "../utils/check.js";

export const hash = async (line = "") => {
  const path = line.split(" ").at(0) || "";

  const checkPath = await check(path);

  if (checkPath) {
    const fileStream = fs.createReadStream(path);
    const hash = crypto.createHash("sha256");

    await new Promise((resolve, reject) => {
      fileStream.on("data", (data) => {
        hash.update(data);
      });

      fileStream.on("end", () => {
        const calculatedHash = hash.digest("hex");
        console.log("SHA256 Hash:", calculatedHash);
        resolve();
      });

      fileStream.on("error", (error) => {
        reject(error);
      });
    });
  } else {
    console.log("Wrong path to file!");
  }
};
