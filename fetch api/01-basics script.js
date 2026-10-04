/* ============================================================================
 * LESSON 01 — What the Fetch API actually is
 * Run: node 01-basics.js   (or paste into a browser console)
 * ==========================================================================*/

/* ---------------------------------------------------------------------------
 * 1. The one-sentence definition
 * ---------------------------------------------------------------------------
 * fetch() is a built-in function that makes an HTTP request and returns a
 * Promise. It is the modern replacement for XMLHttpRequest.
 *
 * It is built into:
 *   - every modern browser
 *   - Node.js 18 and above (no `npm install` needed)
 *   - Deno, Bun, Cloudflare Workers...
 *
 * So there is nothing to import. Just call it.
 * ------------------------------------------------------------------------ */

const URL_USERS = 'https://api.worldbank.org/v2/region?format=json';


/* ---------------------------------------------------------------------------
 * 2. The absolute minimum
 * ---------------------------------------------------------------------------
 * fetch(url) sends a GET request. That is the default — you don't configure
 * anything for a simple read.
 * ------------------------------------------------------------------------ */

function lesson_minimumExample() {
  console.log('\n--- 2. The minimum ---');

  fetch(URL_USERS)
    .then(function (response) {
      // `response` is NOT your data. It is a Response object: status, headers,
      // and an unread body stream. We'll dissect it in lesson 02.
      // console.log(response);
      // console.log(response.json());
      return response.json();   // <-- this ALSO returns a promise
    })
    .then(function (data) {
      // NOW we have the parsed JavaScript object.

      console.log(data)
      console.log('Name:', data.name);
      console.log('Email:', data.email);
      // document.querySelector('h1').textContent = data.name[1;
    });
}


/* ---------------------------------------------------------------------------
 * 3. THE TWO-STEP READ  ← teach this slowly, it is the core mental model
 * ---------------------------------------------------------------------------
 * Every fetch has two waits, not one:
 *
 *   Step 1 — wait for the HEADERS to arrive.
 *            fetch() resolves here. You now know the status code, the
 *            content type, the headers. The body may still be downloading.
 *
 *   Step 2 — wait for the BODY to finish downloading and be parsed.
 *            response.json() / .text() resolves here.
 *
 * Why split it? Because you might want to bail out early. If the status is
 * 500, or the file is 4 GB, you can decide *before* downloading the body.
 * ------------------------------------------------------------------------ */

function lesson_twoStepRead() {
  // console.log('\n--- 3. The two-step read ---');

  fetch(URL_USERS)
    .then((response) => {
      // console.log('STEP 1 done. We have headers.');
      // console.log('  typeof response :', typeof response);
      // console.log('  constructor     :', response.constructor.name); // "Response"
      // console.log('  status          :', response.status);
      // console.log('  body read yet?  :', response.bodyUsed);         // false

      return response.json();
    })
    .then((data) => {
      // console.log('STEP 2 done. We have the body.');
      // console.log('  constructor     :', data.constructor.name);     // "Object"
      // console.log('  data.name       :', data.name);
    });
}


/* ---------------------------------------------------------------------------
 * 4. THE CLASSIC BEGINNER BUG
 * ---------------------------------------------------------------------------
 * Show this deliberately. Students write it constantly.
 * ------------------------------------------------------------------------ */

function lesson_theClassicBug() {
  // console.log('\n--- 4. The classic bug ---');

  // WRONG — forgetting the second step:
  fetch(URL_USERS).then((data) => {
    // console.log('WRONG -> data.name is', data.name);  // undefined
    // Because `data` here is a Response, and Response has no `.name`.
  });

  // Also WRONG — forgetting to RETURN inside .then():
  fetch(URL_USERS)
    .then((response) => {
      response.json();          // no `return` — the promise is thrown away
    })
    .then((data) => {
      // console.log('WRONG -> data is', data);  // undefined
    });

  // RIGHT:
  fetch(URL_USERS)
    .then((response) => response.json())      // arrow shorthand = implicit return
    // .then((data) => console.log('RIGHT -> data.name is', data.name));
}


/* ---------------------------------------------------------------------------
 * 5. What fetch returns, visualised
 * ---------------------------------------------------------------------------
 *   const p = fetch(url);
 *   p is a Promise<Response>  ── not a Response, not your data.
 *
 * A Promise is a box that will eventually contain a value. `.then()` opens the
 * box. `await` also opens the box (lesson 04).
 * ------------------------------------------------------------------------ */

function lesson_itIsAPromise() {
  // console.log('\n--- 5. fetch returns a Promise ---');

  const p = fetch(URL_USERS);
  // console.log('Immediately:', p);          // Promise { <pending> }
  // console.log('Is a Promise?', p instanceof Promise);  // true

  // This line runs BEFORE the response arrives. fetch is asynchronous:
  // it does not block. The request goes out, JS keeps running, and the
  // callback fires later.
  // console.log('This logs before the response arrives.');

  // p.then(() => console.log('...and this logs after.'));
}


/* ---------------------------------------------------------------------------
 * 6. fetch vs the old way (for context — do not make them write XHR)
 * ---------------------------------------------------------------------------
 *   // XMLHttpRequest, the 2010 way:
 *   const xhr = new XMLHttpRequest();
 *   xhr.open('GET', url);
//  *   xhr.onload  = () => { if (xhr.status === 200) console.log(JSON.parse(xhr.responseText)); };
 *   xhr.onerror = () => console.log('failed');
 *   xhr.send();
 *
 *   // fetch, the modern way:
 *   const data = await (await fetch(url)).json();
 *
 * fetch is promise-based, so it composes with async/await, Promise.all,
 * and everything else in modern JS. XHR is callback-based and does not.
 * ------------------------------------------------------------------------ */


/* ---------------------------------------------------------------------------
 * RUNNER — uncomment one at a time during class
 * ------------------------------------------------------------------------ */
lesson_minimumExample();
lesson_twoStepRead();
lesson_theClassicBug();
lesson_itIsAPromise();

/* ---------------------------------------------------------------------------
 * NOTE ON OUTPUT ORDER
 * These four run concurrently, so the logs interleave. That is itself a
 * teaching moment: async code does not finish in the order you wrote it.
 * Run them one at a time if the interleaving is confusing.
 * ------------------------------------------------------------------------ */

/* ---------------------------------------------------------------------------
 * CHECK FOR UNDERSTANDING
 *   Q1. What type does fetch() resolve to?
 *   Q2. Why do you need TWO awaits/thens to get JSON data?
 *   Q3. What does `response.bodyUsed` tell you?
 *   Q4. Will `console.log` after a fetch() call run before or after the
 *       response arrives? Why?
 * ------------------------------------------------------------------------ */
