class StudentCard {
    #name;
    #age;
    #faculty;
    #year;
    #imgUrl;

    constructor(name, age, faculty, year, imgUrl) {
        this.#name = name;
        this.#age = age;
        this.#faculty = faculty;
        this.#year = year;
        this.#imgUrl = imgUrl;
    }

    introduce() {
        console.log(
            `Студент ${this.#name}, ${this.#age} лет, 
            факультет ${faculty}, курс ${year}.
        `);
    }
    updateYear() {
        this.#year++;
    }
    graduate() {
        if (this.#year > 4) {
            console.log(`
                Студент ${this.#name} закончил обучение.
            `);
        }
    }

    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    get year() {
        return this.#year;
    }

    get imgUrl() {
        return this.#imgUrl;
    }

    get faculty() {
        return this.#faculty;
    }

    set faculty(faculty) {
        this.#faculty = faculty;
    }
}

function showStudentCard(studentCard) {
    let grid = document.getElementById("students");

    let newCardDiv = grid.appendChild(document.createElement('div'));
    newCardDiv.className = "card";
    
    let img = newCardDiv.appendChild(document.createElement('img'));
    img.className = "student-img";
    img.src = studentCard.imgUrl;

    let innerDiv = newCardDiv.appendChild(document.createElement('div'));
    innerDiv.className = 'card-info';

    let name = innerDiv.appendChild(document.createElement('p'));
    name.innerHTML = `Name: ${studentCard.name}`;

    let age = innerDiv.appendChild(document.createElement('p'));
    age.innerHTML = `Age: ${studentCard.age}`;

    let faculty = innerDiv.appendChild(document.createElement('p'));
    faculty.innerHTML = `Faculty: ${studentCard.faculty}`;

    let year = innerDiv.appendChild(document.createElement('p'));
    year.innerHTML = `Year: ${studentCard.year}`;
}

let s1 = new StudentCard("Test", 17, "IT", 2, "https://placehold.co/512x512");
let s2 = new StudentCard("Test 2", 18, "Biology", 1, "https://placehold.co/512x512");
let s3 = new StudentCard("Test 3", 20, "Literature", 3, "https://placehold.co/512x512");

showStudentCard(s1);
showStudentCard(s2);
showStudentCard(s3);