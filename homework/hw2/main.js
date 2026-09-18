function task1() {
  const age = parseInt(prompt("Введите ваш возраст:"))

  if (age <= 2) {
    alert("Вы ребенок (0-2 года)")
  } else if (age < 12) {
    alert("Вы ребенок (до 12 лет)")
  } else if (age <= 18) {
    alert("Вы подросток (12-18 лет)")
  } else if (age < 60) {
    alert("Вы взрослый (18-60 лет)")
  } else {
    alert("Вы пенсионер (от 60 лет)")
  }
}

function task2() {
  const key = prompt("Введите цифру от 0 до 9:")

  switch (key) {
    case "1":
      alert("На клавише 1 расположен символ: !")
      break
    case "2":
      alert("На клавише 2 расположен символ: @")
      break
    case "3":
      alert("На клавише 3 расположен символ: #")
      break
    case "4":
      alert("На клавише 4 расположен символ: $")
      break
    case "5":
      alert("На клавише 5 расположен символ: %")
      break
    case "6":
      alert("На клавише 6 расположен символ: ^")
      break
    case "7":
      alert("На клавише 7 расположен символ: &")
      break
    case "8":
      alert("На клавише 8 расположен символ: *")
      break
    case "9":
      alert("На клавише 9 расположен символ: (")
      break
    case "0":
      alert("На клавише 0 расположен символ: )")
      break
    default:
      alert("Ошибка!")
  }
}

function task3() {
  const usd = parseInt(prompt("Введите сумму в USD:"))

  // .toUpperCase() - чтобы не зависеть от регистра ввода
  const currency = prompt("Введите валюту перевода: EUR, UAH, AZN:").toUpperCase()

  let result = 0

  switch (currency) {
    case "EUR":
      result = usd * 0.92
      alert(`${usd} USD = ${result} EUR`)
      break
    case "UAN":
      result = usd * 41.5
      alert(`${usd} USD = ${result} UAH`)
      break
    case "AZN":
      result = usd * 1.70
      alert(`${usd} USD = ${result} AZN`)
      break
    default:
      alert("Неизвестная валюта")
  }
}

function task4() {
  const year = parseInt(prompt("Введите год:"))

  const isLeap = (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) ? "високосный" : "не високосный"

  // внутрь кавычек `` можно вставлять переменные
  alert(`Год ${year} - ${isLeap}.`)
}

function task5() {
  const value = prompt("Введите пятизначное число:")

  const n1 = parseInt(value / 10000)
  const n2 = parseInt((value / 1000) % 10) 
  const n4 = parseInt((value / 10) % 10)
  const n5 = parseInt(value % 10)

  const isPalindrome = (n1 === n5 && n2 === n4) ? "является палиндромом" : "не является палиндромом"

  alert(`Число ${value} ${isPalindrome}.`)
}

function task6() {
  const amount = parseInt(prompt("Введите сумму покупки:"))

  let discountPercent = 0

  if (amount >= 500) {
    discountPercent = 7
  } else if (amount >= 300) {
    discountPercent = 5
  } else if (amount >= 200) {
    discountPercent = 3
  } else {
    discountPercent = 0
  }

  const discountValue = (amount * discountPercent) / 100
  const finalAmount = amount - discountValue

  alert(`Сумма покупки: ${amount}\nСкидка: ${discountPercent}%\nК оплате: ${finalAmount}`)
}

function task7() {
  const circleLength = parseFloat(prompt("Введите длину окружности:"))
  const squarePerimeter = parseFloat(prompt("Введите периметр квадрата:"))

  const diameter = circleLength / 3.14
  const side = squarePerimeter / 4

  const result = (diameter <= side) ? "Окружность поместится в квадрат." : "Окружность не поместится в квадрат."

  alert(`Диаметр окружности: ${diameter}\nСторона квадрата: ${side}\n${result}`)
}

function task8() {
  let score = 0

  // Вопрос 1
  const q1 = prompt("Сколько дней в високосном году?\n1) 364\n2) 365\n3) 366\nВведите номер ответа (1, 2 или 3):")
  if (q1 === "3") {
    score += 2
  }

  // Вопрос 2
  const q2 = prompt("Какой оператор в JS используется для строгого равенства?\n1) ==\n2) ===\n3) =\nВведите номер ответа (1, 2 или 3):")
  if (q2 === "2") {
    score += 2
  }

  // Вопрос 3
  const q3 = prompt("Чему равно 2 + '2' в JavaScript?\n1) 4\n2) '22'\n3) NaN\nВведите номер ответа (1, 2 или 3):")
  if (q3 === "2") {
    score += 2
  }

  alert(`Тест завершен! Вы набрали: ${score} из 6 баллов.`)
}

// Здесь вызываем функцию задания для проверки
task5()