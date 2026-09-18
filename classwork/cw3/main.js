//------------Практика в классе --------------
// 1. Подсчитать сумму всех чисел в заданном пользователем
// диапазоне. 

function Task1()
{
    start = parseInt(prompt("Начало диапазона: "),0);
    end = parseInt(prompt("Конец диапазона: "),10);

    let sum=0;

    // while(start<=end) // 1 - 10
    // {
    //     sum+=start; // sum = sum+start
    //     start++;
    // }

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    alert("Sum = " + sum);
    
}

// 2. Запросить у пользователя 10 чисел и подсчитать, сколько
// он ввел положительных, отрицательных и нулей. При этом
// также посчитать, сколько четных и нечетных. Вывести
// статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

function Task2()
{
    let pos=0, neg=0, nul=0, chet=0, nechet=0;
    let count=0;

    while(count<10)
    {
        let number = parseInt(prompt("Введите число: "),0);
        if(number<0)
        {
            neg++;
        }
        else if(number>0)
        {
            pos++;
        }
        else{
            nul++;
        }
        if(number%2==0)
        {
            chet++;
        }
        else{
            nechet++;
        }
       
        count++;
    }

     let res = `Полоижительные ${pos}\n Отрицательные ${neg}
        Нулевые ${nul}\n Четные ${chet}\nНечётные ${nechet}\n`;
        alert(res)   


}


function task1() {
    let count = parseInt(prompt('How many times: '))

    let result = ''

    for (let i = 0; i < count; i++) {
        result += '#'
    }

    alert(result)
}

function task2() {
    let digit = parseInt(prompt('Enter digit: '))

    let result = ''

    for (let i = digit; i > 0; i--) {
        result += i
    }

    alert(result)
}

function task3() {
    let base = parseInt(prompt('Enter base: '))
    let exponent = parseInt(prompt('Enter exponent: '))
    let result = 1;

    for (let i = 0; i < exponent; i++) {
        result *= base
    }

    alert(result)
}

function task4() {
    let d1 = parseInt(prompt('Enter first digit: '))
    let d2 = parseInt(prompt('Enter second digit: '))

    const arr = []

    const limit = d1 > d2 ? d1 : d2

    for (let i = 1; i <= limit; i++) {
        if (d1 % i === 0 && d2 % i === 0) {
            arr.push(i);
        }
    }

    let result = ''

    for (let i = 0; i < arr.length; i++) {
        result += arr[i] += ' '
    }

    alert(result)
}

function task5() {
    let digit = parseInt(prompt('Enter digit: '))

    let result = 1

    for (let i = 1; i <= digit; i++) {
        result *= i
    }

    alert(result)
}

function task6() {
    let correct = false;
    do {
        let answer = parseInt(prompt('What`s 2 + 2 * 2?'))

        if (answer === 6) {
            correct = true
        }
    } while (!correct)
    alert('Correct!')
}

function task7() {
    let n = 1000
    let count = 0

    do {
        n /= 2
        count++
    } while (!(n < 50))
    alert(n + ' ' + count)
}

task7()