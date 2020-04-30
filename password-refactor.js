const plainPass = String(process.argv.slice(2));

const map = {
  a: "4",
  e: "3",
  o: "0",
  l: "1"
};

const obfuscate = function(string) {
  let output = "";
  for (const letter of string) {
    if (map[letter]) {
      output += map[letter];
    } else {
      output += letter;
    }
  }
  return output;
};

console.log(obfuscate(plainPass));