// Task 1

let name = prompt('Enter your name: ')
alert('Hello, ' + name + '!')


// Task 2

const presentYear = 2026

let year = parseInt(prompt('Enter your birth year: '))
alert('You`re ' + (presentYear - year) + ' years old')


// Task 3

let length = parseFloat(prompt('Enter length: '))
alert('Perimeter: ' + (length * 4))


// Task 4

let radius = parseFloat(prompt('Enter radius: '))
alert('Square: ' + (3.14 * (radius * radius)))


// Task 5

let distance = parseFloat(prompt('Enter distance: '))
let time = parseInt(prompt('Enter time: '))

alert('Speed: ' + (distance / time))


// Task 6

const oneDollarInEuro = 0.86
let dollars = parseFloat(prompt('Enter dollars: '))

alert('Euro: ' + (dollars * oneDollarInEuro))


// Task 7 

let gigabytes = parseInt(prompt('Enter gigabytes: '))
const fileSizeMb = 820;

const totalMb = gigabytes * 1024;
const fileCount = parseInt(totalMb / fileSizeMb);

alert('Files: ' + fileCount)


// Task 8

let money = parseFloat(prompt('Enter money: '))
let chocolateBarPrice = parseFloat(prompt('Enter chocolate bar price: '))

const chocolateBarCount = parseInt(money / chocolateBarPrice);

alert('Chocolate bars: ' + chocolateBarCount)


// Task 9

let num = parseInt(prompt("Enter value:"))

let lastDigit = num % 10
let middleDigit = parseInt(num / 10) % 10
let firstDigit = parseInt(num / 100)

let reversed = lastDigit * 100 + middleDigit * 10 + firstDigit

alert("Reversed: " + reversed);


// Task 10

let value = parseInt(prompt("Enter value:"))

let result = (value % 2 === 0) ? 'Even' : 'Odd'

alert(result)
