//  arrays.js
const steps = ["one", "two", "three"];
const listTemplate=(step) =>{
  return `<li>${step}</li>`;
} //the html string made from step

const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join();// set the innerHTML

/* I did a fix
// arrays.js
const steps = ["one", "two", "three"];

// Correcting the function declaration
const listTemplate = (step) => {
  return `<li>${step}</li>`;
};

// Convert steps to HTML list items
const stepsHtml = steps.map(listTemplate);

// Set the innerHTML, joining the items without a separator
document.querySelector("#myList").innerHTML = stepsHtml.join('');*/




/*Notes about methos:
Check Your Understanding
For all of these exercises, use this array declaration:

let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

Using the array.filter() method, create an array named namesB 
with only those names from the name array that start with 
the character 'B'.
Answer:

let namesB = names.filter(name => name.charAt(0) === 'B');

Using the array.map() method, create a new array named namesLength 
that contains the length of each name in the names array. 
Expected output is [5, 8, 5, 8, 3].
Answer:

let nameLengths = names.map((name) => name.length);

Using the names.reduce() method, create an expression that 
returns the average string length of the names in the names 
array. Expected output is 5.8.
Answer:

names.reduce((total, name) => total + name.length, 0) / names.length;

The initial value of the reduction is set to 0. Inside the 
reducer function, total represents the accumulated sum of 
string lengths, and name represents each individual name in 
the array. The reducer function adds the length of each 
name to the total in each iteration. (like any accumulator, 
total += name.length).

*/