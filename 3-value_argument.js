const args = ["","Best","School"];
args[0]= undefined;

if (args[0] === undefined) {
  console.log("No argument");
} else if (args[1] === undefined) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}