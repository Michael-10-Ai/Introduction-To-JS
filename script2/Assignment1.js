let form = document.getElementById('signup-form');

let firstname = document.getElementById('first-name');
let lastname = document.getElementById('last-name');
let email = document.getElementById('email');
let phonenumber = document.getElementById('phone-number');
let password = document.getElementById('password');

let firstnameError = document.getElementById('first-name-Error');
let lastnameError = document.getElementById('last-name-Error');
let emailError = document.getElementById('email-Error');
let phonenumberError = document.getElementById('phone-number-Error');
let passwordError = document.getElementById('password-Error');

let successMessage = document.getElementById('successMessage');


form.addEventListener('submit', function (event) {
    event.preventDefault();

    let isFormValid = true

    if (firstname.value.trim() === "") {
        firstnameError.textContent = 'please enter your First Name';
        firstname.classList.add('input-error')

        isFormValid = false
    }

    if (lastname.value.trim() === "") {
        lastnameError.textContent = 'please enter your Last Name';
        lastname.classList.add('input-error')

        isFormValid = false
    }

    if (email.value.trim() === "") {
        emailError.textContent = 'please enter your Email';
        email.classList.add('input-error')

        isFormValid = false
    }

    if (phonenumber.value.trim() === "") {
        phonenumberError.textContent = 'please enter your Phone Number';
        phonenumber.classList.add('input-error')

        isFormValid = false
    }

    if (password.value.trim() === "") {
        passwordError.textContent = 'please enter your Password';
        password.classList.add('input-error')

        isFormValid = false
    }

    if (isFormValid === true) {
        successMessage.textContent = 'Success! Your form was submitted successfully';
    }

        form.reset();
})




// Class Assignments: if Statements, Ternary Operators, For Loops, and While loops
// Create a student grade checker for five students.
//
// Requirements:
// 1. Create an array containing five student names and an array containing their
// corresponding test scores.
// 2. Use a for loop to visit every student and display their name and score.
// 3. Use an if statement to display "Pass" when a score is 50 or higher and 
// "Needs Improvement" when the score is below 50.
// 4. Use a ternary operator to display "Execellent" when a score is 80 or higher;
// otherwise display "Keep practicing".
// 5. Use a while loop to count and display how many students passed.
// 6. At the end, display the total number of students who passed.
//
// Example output:
// Alex: 85 - Pass - Execellent
// Sam 42 - Needs Improvement - Keep Practicing
// Students who passed: 1
//
//Bonus: Calculate and display the class average.


// let students = ['John', 'Musa', 'Fawaz', 'Chinedu', 'Kunle']
// let scores = [80, 48, 50, 86, 32]

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i] + ' - ' + scores[i])

//     if (scores[i] >= 50) {
//         console.log('Pass')
//     } else {
//         console.log('Needs Improvement')
//     }


//     scores[i] >= 80 ? console.log('Excellent') : console.log('Keep Practicing')

//     // console.log(`${students[i]} - ${scores[i]}`)

// }

// let i = 0
// while (i < students.length) {
//     console.log(students[i]);
//     i++;
// }


// const students = ['John', 'Musa', 'Fawaz', 'Chinedu', 'Kunle']
// const scores = [80, 48, 50, 86, 32]

// for (let i = 0; i < students.length; i++) {
//     const student = students[i]
//     const score = scores[i]
//     console.log(students[i] + ': ' + scores[i]);

//     if (scores[i] >= 50) {
//         console.log('Pass')
//     } else {
//         console.log('Needs Improvement');
//     }

//     const performance = scores[i] >= 80 ? 'Execellent' : 'Keep Practicing';
//     console.log(performance);

// }
// let i = 0;
// let studentsWhoPassed = 0;
// while(i < students.length){
//     if(scores[i] >= 50){
//     studentsWhoPassed++;
// }
//     i++
// }
// console.log('Students who passed: ' + studentsWhoPassed);

// //Class average
// let totalScore = 0;
// for(let i = 0; i < scores.length; i++){
//     // totalScore += scores[i];
//     totalScore = totalScore + scores[i];
// }
// const classAverage = totalScore / scores.length;
// console.log('Class average:' + classAverage);

let students = [
    { name: 'John', scores: 80 },
    { name: 'Musa', scores: 48 },
    { name: 'Fawaz', scores: 50 },
    { name: 'Chinedu', scores: 32 },
    { name: 'Kunle', scores: 86 }
]

for (let i = 0; i < students.length; i++) {
    const student = students[i]
    const score = scores[i]
    console.log(student[i] + ': ' + score[i]);

    if (scores[i] >= 50) {
        console.log('Pass')
    } else {
        console.log('Needs Improvement');
    }

    const performance = scores[i] >= 80 ? 'Execellent' : 'Keep Practicing';
    console.log(performance);

}


