function updateCalculation(value) {
  if (value === '+' || value === '-' || value === '*' || value === '/') {
    calculation += ` ${value} `
  } else {
    calculation += value
  }
  document.getElementById('calculation-display').innerText = calculation
  console.log(calculation)
}

function calculateResult() {
  try {
    calculation = eval(calculation)
    calculation = Math.round(calculation * 100) / 100
    document.getElementById('result-display').textContent = calculation
    console.log(calculation)
  } catch (error) {
    document.getElementById('result-display').innerText = 'Error'
    calculation = ''
    console.log(calculation)
  }
}

function clearDisplay() {
  calculation = ''
  document.getElementById('calculation-display').innerText = ''
  document.getElementById('result-display').textContent = '0'
  console.log(calculation)
}

function deleteLastCharacter() {
  document.getElementById('result-display').innerText = '0'
  document.getElementById('calculation-display').innerText = calculation
}

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed')
  }
  return a / b
}

function decimal() {
  if (!calculation.includes('.')) {
    calculation += '.'
  }
  document.getElementById('calculation-display').innerText = calculation
  console.log(calculation)
}
