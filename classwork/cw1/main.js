let age = 16

console.log('Age = ', age)

let age = parseInt(prompt('Enter age: ', 16))
console.log(age + 1)

let a = '10'
let b = 10

if (a == b) {
    console.log(true)
} else {
    console.log(false)
}




// Task 1

let n = parseInt(prompt('Enter value: ', 1))
n *= n
alert(n)


// Task 2

let n1 = parseInt(prompt('Enter value: ', 1))
let n2 = parseInt(prompt('Enter value: ', 2))

let avg = (n1 + n2) / 2

alert(avg)


// Task 3

let n = parseInt(prompt('Enter value: ', 1))
let square = n * n
alert(square)


// Task 4

let km = parseInt(prompt('Enter kilometers: ', 1))
let miles = km * 0.621371

alert(miles)


// Task 5

let n1 = parseInt(prompt('Enter value: ', 1))
let n2 = parseInt(prompt('Enter value: ', 1))

alert(n1 + n2)
alert(n1 - n2)
alert(n1 * n2)
alert(n1 / n2)


// Task 6

let a = parseInt(prompt('Enter value: ', 1))
let b = parseInt(prompt('Enter value: ', 1))

alert(-b / a)


// Task 7

let hours = parseInt(prompt('Enter hours: '))
let minutes = parseInt(prompt('Enter minutes: '))

let hoursLeft = 24 - hours - 1
let minutesLeft = 60 - minutes

alert('Time left: ' + hoursLeft + ' hours, ' + minutesLeft + ' minutes');


// Task 8

let value = parseInt(prompt('Enter value: '))

let secondDigit = parseInt((value / 10) % 10)

alert(secondDigit)


// Task 9

let value = parseInt(prompt('Enter value: '))

let newValue = parseInt((value % 10) * 10000 + (value / 10))

alert(newValue)


// Task 10

let sales = parseInt(prompt('Enter sales: '))

let salary = 250 + (sales * 0.10)

alert(salary)