import fs from "node:fs";
import util from "node:util";

const file = fs.readFileSync("./rima.txt");
const data = file.toString();

const infoProcess = util.inspect(process);
console.log(infoProcess);

const rows = data.split("\n");
console.log(rows);

const wordsArray = rows.flatMap((row) =>
  row.split(" ").filter((word) => word !== "")
);

const words = wordsArray.length;
const characters = data.replace(/\r?\n|\r/g, "").length;
const lines = rows.length;

console.table([{ Palabras: words, Caracteres: characters, Líneas: lines }]);
