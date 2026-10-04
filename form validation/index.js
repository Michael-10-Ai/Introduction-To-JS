let form = document.getElementById('signupForm');

let fullname = document.getElementById('fullname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirM = document.getElementById('confirm');

let fullnameError = document.getElementById('fullname-error');
let emailError = document.getElementById('email-error');
let passwordError = document.getElementById('password-error');
let confirmError = document.getElementById('confirm-error');

let success = document.getElementById('success');


form.addEventListener('submit', function (event) {
    event.preventDefault()

    let isFormValid = true

    if (fullname.value === '') {
        fullnameError.textContent = 'Full name is required';

        isFormValid = false;
    } else {
        fullnameError.textContent = '';
    }

    if (email.value === '') {
        emailError.textContent = 'Email is required';

        isFormValid = false
    } else if(!email.value.includes('@')){
        emailError.textContent = 'Email must contain @';

        isFormValid = false
    } else {
        emailError.textContent = '';
    }

    if (password.value === '') {
        passwordError.textContent = 'Password is required';

        isFormValid = false
    } else if(password.value.length < 8){
        passwordError.textContent = 'Password must be at least 8 characters or more';
        
        isFormValid = false;
    }else {
        passwordError.textContent = '';
    }

    if (confirM.value === '') {
        confirmError.textContent = 'Confirmation is required';

        isFormValid = false
    }else if(password.value !== confirM.value){
        confirmError.textContent = 'Passwords do not match';

        isFormValid = false;
    } else {
        confirmError.textContent = '';
    }

    if (isFormValid) {
    document.querySelector('.card').innerHTML = `
      <div style="text-align:center; padding:30px;">
        <h1 style="color:#22c55e;">Account Created!</h1>
        <p style="color:#6b7280; margin-top:10px;">You have successfully signed up.</p>
        <button onclick="location.reload()" class="btn" style="margin-top:20px;">Go Back</button>
      </div>
    `;
  }
})