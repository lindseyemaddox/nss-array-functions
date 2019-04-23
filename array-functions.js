
var colors = ["red", "blue", "green", "yellow", "orange", "teal"];

var reversedColors = colors.reverse();
console.log("reversedColors", reversedColors);

var sortedColors = colors.sort();
console.log("sortedColors", sortedColors);

var numbers = [20, 10, 5, 8, 30, 100, 19];

var sortedNumbers numbers.sort(function (first, second) {
  return second - first;
});
console.log("sortedNumbers", sortedNumbers);

var joinedColors = colors.join(",");
console.log("joinedColors", joinedColors);

var fruits = ["banana", "orange", "lemon", "apple", "mango"];

var citrus = fruits.slice(1, 3);
console.log("citrus", citrus);

console.log(colors.indexOf("orange"));

var newColorArray = joinedColors.split(",");
console.log("newColorArray", newColorArray);

colors.forEach(function (color) {
  console.log(color);
});

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

var reversedColors = colors.map(function (color) {
  return color.split("").reverse().join("");
});
console.log("reversedColors", reversedColors)

var fourLetters = colors.filter(function (color) {
  return color.length === 4;
});
console.log("fourLetters", fourLetters);

var fourLetters = [];
for (var i = 0; i < colors.length; i++) {
  if (colors[i].length === 4) {
    fourLetters.push(colors[i]);
  }
}
console.log("fourLetters", fourLetters);

var sum = numbers.reduce(function (prev, curr) {
  return prev + curr;
});
console.log("sum", sum);

var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("sum", sum);

var words = ["one", "in", "the", "hand", "is", "worth", "two", "in", "the", "bush"];
var sentence = words.filter(function (word) {
  return word.length > 2;
}).reduce(function (previous, current) {
  return previous + " " + current;
});
console.log("sentence", sentence);