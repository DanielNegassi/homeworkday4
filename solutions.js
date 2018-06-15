
1.Create a file called solutions.js. Write your answers in this file.
Parameter is variable in the declaration of function.
Argument is the actual value of this variable that gets passed to function.



2. Within a function, what is the difference between return and console.log?

 Console.log emits a message to your browsers Console.

 return is a keyword that terminates a function and possibly returns a value to 
  the caller of that function.


3.Write a function checkPalindrome that accepts a single argument, a string. The function
 hould return true (Boolean) if the string is a palindrome, false if it is not. 
 Make sure your function will give the correct answer for words with capital letters.

 const checkPalindrome =(string) => {
 	if ((string.split('').reverse().join('')) == string ) {
 		return true;
 	} else {
 		return false;
 	}
 }
console.log(checkPalindrome('level'))

4.Write a function sumDigits that accepts a number and returns the sum of its digits.
 
const sumDigits = (number) => {
  return number.toString().split('');
}
console.log(sumDigits(1235));

5.Write a function calculateSide that takes two arguments: sideA and sideB, and returns the solution for sideC using the Pythagorean theorem.

const calculateSide = (a, b) => {
	console.log(Math.hypot(a,b));
}
 calculateSide(3, 4); 

6.Write a function sumArray that takes an array as an argument. The array should contain numbers. The function should return the sum of the 
numbers in the array. Use a for loop within the function to iterate over the array and sum the contents. Use a variable such as


const sumArray = (numbers) => {
	var s = 0;
	for(let i=0; i<(numbers.length); i++){
		s+= numbers[i];
	}
   return s;	
}
console.log(sumArray([1, 2, 3, 4]));
