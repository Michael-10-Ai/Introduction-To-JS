const element = document.querySelectorAll('.demo');
console.log(element);

const element1 = document.querySelector('p');
console.log(element);
console.log(element1);

const element2 = document.getElementById('demo');

const clickBtn = document.querySelector('#click-me')
console.log(clickBtn);

clickBtn.addEventListener('click', () => {
    console.log('Button Clicked');
})

function whenClicked() {
    console.log("Hello Malik, you have clicked me");

};

const demoElement = document.querySelector('#demo');
const changeTextBtn = document.querySelector('#click-me-text');

const demoElement2 = document.querySelector('#demo2');

changeTextBtn.addEventListener('click', () => {
    demoElement.textContent = 'The text has been changed!';

    demoElement2.innerHTML = '<div> <strong> This is a bold element</strong> <h1> Text changed</h1> </div>';
});

