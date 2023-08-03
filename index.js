/*Only odds pseudocode

Create an array named 'input'
Create an array for the results, named 'output'
Make a for loop that goes through each index starting at 0
for (let i = 0; i < input.length; i++)
Inside an if condition:
At each index, which is a number, check to see if it's even or odd
To check that, use the % (modulus) operator - (example: 2 % 2) if we get 0, it's even; if we get 1, it's odd
If it's odd, push the number to the 'output' array
Outside the loop, console.log the 'output' array

*/

const input = [2, 4, 6, 8, 10, 11, 12];
const output = [];

for (let i = 0; i < input.length; i++) {   
    if (input[i] % 2 === 1) {
        output.push(input[i]);
    }
}

console.log(output);


/* Vowel versus Consonant
Define two variables:
consCount= consonants count  vowCount= vowels count
Vowels = "aeiou"
for (let i = 0; i < input.length; i++)
Includes: any vowel which I will also define the Vowel variable
The return =
*/



const words = ["hello", "ukelele", "awesome", "onomonopia", "textbook"]
const vowels= "aeiou";
let consCount = 0;
let vowCount = 0;

for (let i = 0; i < words.length; i++) {
    if (vowels.includes(words[i])) {
        vowCount++;
    } else {
        consCount++
    
    }
}
 console.log(`${words} has ${consCount} consonants and ${vowCount} vowels`);





/* 
Reverse Array
with a for loop create a code that creates a new array reverse order
Use function = to define a functin with inputArray as a parameter
reversed array is the output >> reverse order of arrays
This time the loop will be incrementing in reverse by the last index





*/

function reverseArray(inputArray) {
    const reversedArray = [];
    for (let i = inputArray.length - 1; i >= 0; i--) {
        reversedArray.push(inputArray[i]);
    }
    console.log(reversedArray);
}




