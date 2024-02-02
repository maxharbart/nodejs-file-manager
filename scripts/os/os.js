import os from "os";

const COMMANDS = {
  EOL: "--EOL",
  CPUS: "--cpus",
  HOMEDIR: "--homedir",
  USERNAME: "--username",
  ARCHITECTURE: "--architecture",
};

const getEol = () => {
  console.log("EOL: ", JSON.stringify(os.EOL));
};

const getCpus = () => {
  const cpusData = os.cpus();
  const data = [];
  const emptyInLine = 9;
  cpusData.map((core) => {
    data.push({
      MODEL: core.model.slice(0, core.model.length - emptyInLine),
      RATE: `${core.speed / 1000} GHz`,
    });
  });
  console.log(`Cpus length: ${cpusData.length}`);
  console.table(data);
};

const getHomedir = () => {
  console.log("homedir: ", os.homedir());
};

const getUsername = () => {
  const userInfo = os.userInfo();
  console.log("username: ", userInfo.username);
};

const getArchitecture = () => {
  console.log("arch: ", process.arch);
};

export const getOs = (command = "") => {
  switch (command) {
    case COMMANDS.EOL:
      getEol();
      break;
    case COMMANDS.CPUS:
      getCpus();
      break;
    case COMMANDS.HOMEDIR:
      getHomedir();
      break;
    case COMMANDS.USERNAME:
      getUsername();
      break;
    case COMMANDS.ARCHITECTURE:
      getArchitecture();
      break;
  }
};
