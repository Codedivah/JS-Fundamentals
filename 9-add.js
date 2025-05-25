const x = parseInt(process.argv[2]);
const y = parseInt(process.argv[3]);

if (isNaN(x) || isNaN(y)) {
  console.log('Not a Number');
} else {
  console.log(x + y);
}
