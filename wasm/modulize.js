import { readFileSync, writeFileSync } from "fs";

const modulizeWasm = (name) => {
  const content = readFileSync(name + "package.json");

  const packageJSON = JSON.parse(String(content));
  packageJSON["type"] = "module";

  writeFileSync(name + "package.json", JSON.stringify(packageJSON));

}

const directories = [ "./wasm/minesweeper/pkg/", "./wasm/snake/pkg/" ]; // change this to match your Rust library's name
directories.forEach(n => modulizeWasm(n))
