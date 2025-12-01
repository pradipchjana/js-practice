const code = Deno.readTextFileSync("./for_all_fn.js");
let changeCode = code.replace(/function (\w+)(\(.*\))/g, "const $1 = $2 =>");
changeCode = changeCode.replace(/\w+ (\w+) = function (\(.*\))/g, "const $1 = $2 =>")
console.log(changeCode);

