const a = {
    name: "Bangladesh";
    age: 47,
    are: 147570,
}

console.log(a.age);

let str = "apple, banana, kiwi";
console.log(str.slice(7, 13));

Replace Method:

let love = "I love Jorina";
console.log(love.replace("Jorina", "Michi"));

let love = "I love love Jorina";
console.log(love.replace("love", "hate"));


let love = "I love love Jorina";
let result = love.toUpperCase();
let result1 = love.toLowerCase();
console.log(result, result1);
console.log(result1);

let concat = result.concat(" ", result1);
console.log(concat);

let love1 = "     I love love Jorina       ";

console.log(love1.trim());

let stingSearch = "I love love Jorina";

console.log(stingSearch.lastIndexOf("love"));
console.log(stingSearch.includes("loove"));

let d = "10";
let e = 10;
let f = isNaN(e);

console.log(isNaN(f));