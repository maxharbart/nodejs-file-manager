import readline from "readline";
import { COMMANDS } from "./constants.js";
import { up } from "./scripts/navigation/up.js";
import { showTable } from "./scripts/navigation/ls.js";
import { openFolder } from "./scripts/navigation/openFolder.js";
import { read } from "./scripts/file-operations/read.js";
import { rename } from "./scripts/file-operations/rename.js";
import { copy } from "./scripts/file-operations/copy.js";
import { create } from "./scripts/file-operations/create.js";
import { move } from "./scripts/file-operations/move.js";
import { remove } from "./scripts/file-operations/remove.js";
import { getOs } from "./scripts/os/os.js";
import { hash } from "./scripts/hash/hash.js";
import { compress } from "./scripts/zip/compress.js";
import { decompress } from "./scripts/zip/decompress.js";

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const printCurrentPath = () => {
  console.log(`\ncurrently in ${process.cwd()}`);
};

const ask = () => {
  const handleAnswer = async (answer) => {
    let closed = false;
    const command = answer.split(" ").at(0);
    switch (command) {
      case COMMANDS.EXIT:
        closed = true;
        exit();
        break;
      case COMMANDS.UP:
        await up();
        break;
      case COMMANDS.CD:
        await openFolder(answer.slice(3));
        break;
      case COMMANDS.LS:
        await showTable();
        break;
      case COMMANDS.CAT:
        await read(answer.slice(4));
        break;
      case COMMANDS.ADD:
        await create(answer.slice(4));
        break;
      case COMMANDS.RN:
        await rename(answer.slice(3));
        break;
      case COMMANDS.CP:
        await copy(answer.slice(3));
        break;
      case COMMANDS.MV:
        await move(answer.slice(3));
        break;
      case COMMANDS.RM:
        await remove(answer.slice(3));
        break;
      case COMMANDS.OS:
        getOs(answer.slice(3));
        break;
      case COMMANDS.HASH:
        await hash(answer.slice(5));
        break;
      case COMMANDS.COMPRESS:
        await compress(answer.slice(9));
        break;
      case COMMANDS.DECOMPRESS:
        await decompress(answer.slice(11));
        break;
      default:
        reAsk(answer);
        break;
    }
    if (!closed) {
      printCurrentPath();
      readLine.question("What do you wanna do? ", handleAnswer);
    }
  };

  readLine.question("What do you wanna do? ", handleAnswer);
};

const reAsk = (invalid) => {
  console.log(`\nInvalid input: ${invalid}`);
};

const getUserName = () => {
  const args = process.argv.slice(2);
  const regexp = /(--)\w+/;
  const username = args.find((arg) => arg.match(regexp));
  const result = username
    ? username.substring(username.indexOf("=")).slice(1)
    : "Noname";
  return result;
};

const exit = () => {
  console.log(`Goodbye, ${getUserName()}`);
  readLine.close();
};

const start = () => {
  console.log(`Hello, ${getUserName()}!`);
  readLine.on("SIGINT", () => exit());
  readLine.on("SIGQUIT", () => exit());
  readLine.on("SIGTERM", () => exit());
  ask();
};

const init = () => {
  start();
};

init();
