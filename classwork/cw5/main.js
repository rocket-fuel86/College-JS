// let header = document.getElementById('header')
// header.textContent = 'Welcome'
// header.innerHTML = '<p>Welcome</p>'
// header.outerHTML = '<div>Just div</div>'

// header.classList.add('test')
// header.classList.remove('test')
// header.classList.add('test2')


// Task 1
let header = document.getElementById('header')
header.textContent = 'Welcome'

// Task 2
let main = document.getElementById('main')
main.style.backgroundColor = '#7bff88'

// Task 3
let notes = document.getElementsByClassName('note')

for (const note of notes) {
    note.style.color = '#6363ff'
}

// Task 4
let items = document.getElementsByClassName('item')
console.log(items.length)

// Task 5
let messages = document.getElementsByClassName('message')
for (const message of messages) {
    message.textContent = 'Updated'
}

// Task 6
let usernameInput = document.querySelector('input[name="username"]')
console.log(usernameInput.value)

// Task 7
let emailInput = document.querySelector('input[name="email"]')
console.log(emailInput.value)

// Task 8
let checkboxes = document.getElementsByName('option')
let counter = 0

for (const element of checkboxes) {
    if (element.type === 'checkbox' && element.checked) {
        counter++
    }
}

console.log(counter)

// Task 9
let footer = document.getElementById('footer')
footer.style.display = 'none'

// Task 10
let menu = document.getElementById('menu')
menu.classList.add('active')