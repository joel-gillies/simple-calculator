/* 
a variable to hold an array 
let temp = [] //what date type should we use?
a variable to hold the sum of an array
const sum = [] //SImilar question with this one?
//or
const sum = ; //define it later?

//could do like:

function addition(num1, num2) {
  return num1 + num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function subtract(num1, num2) {
  return num1 - num2
}

function divide(num1, num2) {
  return num1 / num2
  //return num1 + num2 //???
}

//or all together? Example:
//example with some ai help to finish the example.
function performOperation(num1, num2, operator) {
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return 'Error: Division by zero';
        }
    } else {
        return 'Invalid operator';
    }
}


/*
let one = docutment.getElementById('one')
one = performOperation()

//Or should we put these all in one function?

variable to create interactivity for user to use 
virtual calculator

if statement ( if val is a number and/or val is exactly equal to a decimal
 to allow for numerals and decimal points)

 "else if (val === 'AC') {
    entries = [];
    temp = '';
    total = 0;
    $("#answer").val('')"

  creates a reset button 'AC' which resets values of variables to base line


  else if (val === 'CE') {
    temp = '';
    $("#answer").val('')

  creates a virtual 'CE' that resets to last displayed input 
  if val is absolutely equal to CE then the temp variable is reset to baseline
  Jquery sets "answer" element  to hold a clear string. 

  else if (val === 'x') {
    entries.push(temp);
    entries.push('*');
    temp = '';

    creates a functional 'X' button for multiplications (*) which by use of the 
    .eval()  method can interact with numerals held as a string.

   else if (val === '÷') {
    entries.push(temp);
    entries.push('/');
    temp = '';

    creates a functional "division" button which uses the eval() method to interacts
    with numerals within a string

  else if (val === '=') {
  	entries.push(temp);

    var nt = Number(entries[0]);
    for (var i = 1; i < entries.length; i++) {
      var nextNum = Number(entries[i+1])
      var symbol = entries[i];
      
      if (symbol === '+') { nt += nextNum; } 
      else if (symbol === '-') { nt -= nextNum; } 
      else if (symbol === '*') { nt *= nextNum; } 
      else if (symbol === '/') { nt /= nextNum; }
      
      i++;

    if the value string is equal to "=" the array held within the 'entries' variable will have 
    temp  string pushed into it. 

    evaluates arithmetic operations based on input stored in the 'entries' variable array.

    
     if (nt < 0) {
      nt = Math.abs(nt) + '-';
    }
    
    $("#answer").val(nt);
		entries = [];
    temp = '';
    
  // Push number
  } else {
    entries.push(temp);
    entries.push(val);
    temp = '';
  }
});
    
    */

/* 
Calculator JS
*/

/* try 1.0
let entries [];
let total = 0;
let temp = ''

const screen = (value) =>
{document.getElementById("screen").value = value;}

const clearCalc = () => {
  let entries [];
  let total = 0;
  let temp = ''
}

/*let display = document.getElementById("screen")

*/
/* Try 2.0
let display = document.getElementById('screen')
let button = document.getElementsByTagName('button')
*/

/*
variable to create interactivity for user to use 
virtual calculator

if statement ( if val is a number and/or val is exactly equal to a decimal
 to allow for numerals and decimal points)
 
creates a reset button 'AC' which resets values of variables to base line
   
creates a virtual 'CE' that resets to last displayed input 
if val is absolutely equal to CE then the temp variable is reset to baseline
Jquery sets "answer" element  to hold a clear string. 

creates a functional 'X' button for multiplications (*) which by use of the 
.eval()  method can interact with numerals held as a string.

creates a functional "division" button which uses the eval() method to interacts
with numerals within a string

if the value string is equal to "=" the array held within the 'entries' variable will have 
temp  string pushed into it. 

evaluates arithmetic operations based on input stored in the 'entries' variable array.



*/

let entries = []
let total = 0
let temp = ''

function handleVariables(value) {
  if (value === '=') {
    entries.push(temp)
    total = evaluateExpression(entries) + displayResult(total)
    entries = []
    temp = ''
  } else {
    temp += value //(displayInput temp)
  }
  displayInput(temp)
}

document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', function () {
    handleVariables(this.value)
  })
})

function displayInput(input) {
  document.getElementById('screen').value = input
}

function displayResult() {
  document.getElementById('screen').value = total
}

const clearButton = document.getElementById('clearButton') //Helped by ai
clearButton.addEventListener('click', clearInput)

function clearInput() {
  //Helped by ai
  // Reset any relevant variables (e.g., temp, entries, total)
  temp = ''
  entries = []
  total = 0
  displayInput('') // Clear the input display
}
