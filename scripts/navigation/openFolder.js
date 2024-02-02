export const openFolder = (path = "") => {
  try {
    process.chdir(path);
  } catch (err) {
    console.log(err);
  }
};
