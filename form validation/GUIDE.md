# Form Validation — Simple Teaching Guide

> Open this on your phone or second screen.
> Read it. Type what it says. That's it.

---

## IMPORTANT — One Mistake to Avoid First

When you grab an element, do **NOT** add `.value` at the end like this:

```js
// WRONG ❌
const fullname = document.getElementById('fullname').value;
```

Why is this wrong? Because when the page loads, the input is empty.
So `fullname` becomes `""` (empty string) forever — even after the user types.

Do it like this instead:

```js
// CORRECT ✅
const fullname = document.getElementById('fullname');
```

Now `fullname` holds the **input box itself**.
You only use `.value` later, inside a function, when you want to **read what the user typed**.

---

## Step 1 — Grab Everything (Already Done)

```js
const form     = document.getElementById('signupForm');
const fullname = document.getElementById('fullname');
const email    = document.getElementById('email');
const password = document.getElementById('password');
const confirm  = document.getElementById('confirm');
```

> **Say to class:**
> "We are finding each input in the HTML and saving it in a variable.
> We do this once at the top so we can use them anywhere in the file."

---

## Step 2 — The Submit Event

Type this after the variables:

```js
form.addEventListener('submit', function (e) {
  e.preventDefault();

  let isValid = true;

});
```

> **Say to class:**
> - `addEventListener('submit', ...)` means: "When the user clicks Submit, run this function."
> - `e.preventDefault()` means: "Stop the page from refreshing. We are in charge now."
> - `let isValid = true` — we start by assuming everything is fine.
>   If we find a problem, we will change it to `false`.

---

## Step 3 — Check the Name

Type this **inside** the submit function, under `let isValid = true`:

```js
  // --- Check Name ---
  if (fullname.value === '') {
    document.getElementById('fullname-error').textContent = 'Name is required';
    isValid = false;
  } else {
    document.getElementById('fullname-error').textContent = '';
  }
```

> **Say to class:**
> - `fullname.value` reads what the user typed into the name box.
> - If it is empty (`=== ''`), we put an error message under the box.
> - We also set `isValid = false` so we know something went wrong.
> - If it is NOT empty, we clear any old error message.
>
> **Test it now:** Save the file, open the browser, click Submit with the name empty.
> You should see the error. Type a name and click Submit. Error disappears.

---

## Step 4 — Check the Email

```js
  // --- Check Email ---
  if (email.value === '') {
    document.getElementById('email-error').textContent = 'Email is required';
    isValid = false;
  } else if (!email.value.includes('@')) {
    document.getElementById('email-error').textContent = 'Email must contain @';
    isValid = false;
  } else {
    document.getElementById('email-error').textContent = '';
  }
```

> **Say to class:**
> - First we check if the email box is empty.
> - Then we check if it contains an `@` sign using `.includes('@')`.
> - `!` in front means "does NOT include". So `!email.value.includes('@')` means "if there is no @ sign".
> - `else if` means: "if the first check passed, now check this second thing."

---

## Step 5 — Check the Password

```js
  // --- Check Password ---
  if (password.value === '') {
    document.getElementById('password-error').textContent = 'Password is required';
    isValid = false;
  } else if (password.value.length < 8) {
    document.getElementById('password-error').textContent = 'Password must be at least 8 characters';
    isValid = false;
  } else {
    document.getElementById('password-error').textContent = '';
  }
```

> **Say to class:**
> - `.length` counts how many characters are in the text.
> - `< 8` means "less than 8".
> - So if the password is shorter than 8 characters, we show an error.

---

## Step 6 — Check Confirm Password

```js
  // --- Check Confirm Password ---
  if (confirm.value === '') {
    document.getElementById('confirm-error').textContent = 'Please confirm your password';
    isValid = false;
  } else if (confirm.value !== password.value) {
    document.getElementById('confirm-error').textContent = 'Passwords do not match';
    isValid = false;
  } else {
    document.getElementById('confirm-error').textContent = '';
  }
```

> **Say to class:**
> - `!==` means "not equal to".
> - We compare what the user typed in confirm against what they typed in password.
> - If they are different, we show the error.

---

## Step 7 — What Happens on Success (The Big Moment)

Type this at the bottom of the submit function:

```js
  // --- If everything passed ---
  if (isValid) {
    document.querySelector('.card').innerHTML = `
      <div style="text-align:center; padding:30px;">
        <h1 style="color:#22c55e;">Account Created!</h1>
        <p style="color:#6b7280; margin-top:10px;">You have successfully signed up.</p>
        <button onclick="location.reload()" class="btn" style="margin-top:20px;">Go Back</button>
      </div>
    `;
  }
```

> **Say to class:**
> - `isValid` is only still `true` if every single check above passed.
> - `document.querySelector('.card')` grabs the white box on the page.
> - `.innerHTML = ...` replaces everything inside it with new HTML.
> - The form disappears. A success message appears.
> - This is the big lesson: **Submit does not have to send data to a server.
>   You decide what happens. Here we replaced the form with a success screen.**
> - `location.reload()` on the Go Back button refreshes the page to bring the form back.

---

## The Complete `index.js` (for your eyes only)

```js
const form     = document.getElementById('signupForm');
const fullname = document.getElementById('fullname');
const email    = document.getElementById('email');
const password = document.getElementById('password');
const confirm  = document.getElementById('confirm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let isValid = true;

  if (fullname.value === '') {
    document.getElementById('fullname-error').textContent = 'Name is required';
    isValid = false;
  } else {
    document.getElementById('fullname-error').textContent = '';
  }

  if (email.value === '') {
    document.getElementById('email-error').textContent = 'Email is required';
    isValid = false;
  } else if (!email.value.includes('@')) {
    document.getElementById('email-error').textContent = 'Email must contain @';
    isValid = false;
  } else {
    document.getElementById('email-error').textContent = '';
  }

  if (password.value === '') {
    document.getElementById('password-error').textContent = 'Password is required';
    isValid = false;
  } else if (password.value.length < 8) {
    document.getElementById('password-error').textContent = 'Password must be at least 8 characters';
    isValid = false;
  } else {
    document.getElementById('password-error').textContent = '';
  }

  if (confirm.value === '') {
    document.getElementById('confirm-error').textContent = 'Please confirm your password';
    isValid = false;
  } else if (confirm.value !== password.value) {
    document.getElementById('confirm-error').textContent = 'Passwords do not match';
    isValid = false;
  } else {
    document.getElementById('confirm-error').textContent = '';
  }

  if (isValid) {
    document.querySelector('.card').innerHTML = `
      <div style="text-align:center; padding:30px;">
        <h1 style="color:#22c55e;">Account Created!</h1>
        <p style="color:#6b7280; margin-top:10px;">You have successfully signed up.</p>
        <button onclick="location.reload()" class="btn" style="margin-top:20px;">Go Back</button>
      </div>
    `;
  }
});
```

---

## Cheat Sheet — 5 Things to Know

| Thing | What it means |
|---|---|
| `getElementById('x')` | Find the element with id="x" |
| `.value` | Read what the user typed (use INSIDE functions only) |
| `.length` | Count how many characters |
| `.includes('x')` | Check if the text contains x |
| `isValid = false` | Flag that something went wrong |

---

> **If a student asks "why not just use alert()?"**
> You can! `alert('Account created!')` works fine.
> But replacing the HTML looks more professional and is how real websites do it.
> Both are valid. You chose the better way.
