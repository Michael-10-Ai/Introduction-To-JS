//GRAB THE ELEMENTS FROM THE PAGE

const form = document.getElementById("signupForm");

// The three input boxes
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// The three empty <small> tags where the red errors will go
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// The green success message
const successMessage = document.getElementById("successMessage");

//LISTEN FOR THE SUBMIT CLICK

form.addEventListener("submit", function (event) {
    // Prevent the form from submitting
    event.preventDefault();

    /*
        This variable is our "score keeper".
        We start by assuming everything is fine (true).
        If ANY field is empty, we flip it to false.
      */
    let isFormValid = true;

    /* --------------------------------------------------------
         CHECK 1: THE NAME FIELD
         --------------------------------------------------------
         nameInput.value  = whatever the user typed in that box
         .trim()          = removes empty spaces at the start/end,
                            so typing only spaces still counts as empty
         === ""           = "is exactly equal to nothing"
         -------------------------------------------------------- */

    if (nameInput.value.trim() === "") {
        nameError.textContent = 'Please enter your full name'
        nameInput.classList.add('input-error')

        isFormValid = false;
    }

    /* --------------------------------------------------------
   CHECK 2: THE EMAIL FIELD
   (exactly the same pattern as above)
   -------------------------------------------------------- */

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Please enter your email address";
        emailInput.classList.add("input-error");
        isFormValid = false;
    }


    /* --------------------------------------------------------
       CHECK 3: THE PASSWORD FIELD
       -------------------------------------------------------- */

    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Please enter a password";
        passwordInput.classList.add("input-error");
        isFormValid = false;
    }

    if (isFormValid === true) {
        successMessage.textContent = "Success! Your form was submitted.";

        // form.reset() would empty all the boxes again after a
        // successful submit. It's commented out for now so the
        // typed values stay visible -- uncomment the line below
        // to see how the behavior changes.
        form.reset();
    }
});



