function Task1() {
    let value = parseInt(prompt('Enter digit: '))

    if (value > 0) {
        alert('Positive')
    } else if (value < 0) {
        alert('Negative')
    } else {
        alert('Zero')
    }
}

function Task2() {
    let age = parseInt(prompt('Enter your age: '))

    if (age >= 0 && age <= 120) {
        alert('Correct')
    } else {
        alert('Incorrect')
    }
}

function Task3() {
    let value = parseInt(prompt('Enter digit: '))

    if (value < 0) {
        alert(-value)
    } else {
        alert(value)
    }
}

function Task4() {
    let hours = parseInt(prompt('Enter hours: '))
    let minutes = parseInt(prompt('Enter minutes: '))
    let seconds = parseInt(prompt('Enter seconds: '))

    let hoursValid = hours >= 0 && hours <= 23
    let minutesValid = minutes >= 0 && minutes <= 59
    let secondsValid = seconds >= 0 && seconds <= 59

    if (hoursValid && minutesValid && secondsValid) {
        alert('Correct')
    } else {
        alert('Incorrect')
    }
}

function Task5() {
    let x = parseFloat(prompt('Enter x: '))
    let y = parseFloat(prompt('Enter y: '))

    if (x === 0 && y === 0) {
        alert('Point is on coordinate start')
    } else if (x === 0) {
        alert('Point is on Y-axis')
    } else if (y === 0) {
        alert('Point is on X-axis')
    } else if (x > 0 && y > 0) {
        alert('1st quarter')
    } else if (x > 0 && y < 0) {
        alert('2nd quarter')
    } else if (x < 0 && y < 0) {
        alert('3rd quarter')
    } else if (x < 0 && y > 0) {
        alert('4th quarter')
    }
}

function Task6() {
    let month = parseInt(prompt('Enter month number: '))

    switch (month) {
        case 1:
            alert('January')
            break;
        case 2:
            alert('February')
            break;
        case 3:
            alert('March')
            break;
        case 4:
            alert('April')
            break;
        case 5:
            alert('May')
            break;
        case 6:
            alert('June')
            break;
        case 7:
            alert('July')
            break;
        case 8:
            alert('August')
            break;
        case 9:
            alert('September')
            break;
        case 10:
            alert('October')
            break;
        case 11:
            alert('November')
            break;
        case 12:
            alert('December')
            break;
        default:
            break;
    }
}

function Task7() {
    let n1 = parseInt(prompt('Enter first digit: '))
    let n2 = parseInt(prompt('Enter second digit: '))
    let sign = prompt('Enter sign: ')

    switch (sign) {
        case '+':
            alert(n1 + n2)
            break;
        case '-':
            alert(n1 - n2)
            break;
        case '*':
            alert(n1 * n2)
            break;
        case '/':
            alert(n1 / n2)
            break;
        default:
            break;
    }
}

function Task8() {
    let n1 = parseInt(prompt('Enter first digit: '))
    let n2 = parseInt(prompt('Enter second digit: '))

    alert(n1 > n2 ? n1 : n2)
}

function Task9() {
    let digit = parseInt(prompt('Enter first digit: '))
    
    alert(digit % 5 === 0 ? true : false)
}

function Task10() {
    let planetName = prompt('Enter planet name: ')
    
    alert(planetName.toLowerCase() === 'earth' ? 'Hey earthman!' : 'Hey alien!')
}

// Task10()
// Task9()
// Task8()
// Task7()
// Task6()
// Task5()
// Task4()
// Task3()
// Task2()
// Task1()