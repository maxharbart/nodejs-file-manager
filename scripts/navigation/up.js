const __rootDir = "rs-school-file-manager";

export const up = () => {
  if (process.cwd().includes(__rootDir + "/")) {
    process.chdir("..");
  } else {
    console.log("already in root");
    return;
  }
};
