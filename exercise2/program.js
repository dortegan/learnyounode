var numbers = process.argv.slice(2);
var sum = 0;
numbers.forEach(function(number) {
  sum += Number(number);
});
console.log(sum);
