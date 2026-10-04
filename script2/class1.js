// if time is less than 12, console.log 'good morning'. if the time is greater than 12 but less than 17 then console log 'good afternoon' otherwise console log 'good evening'

let time = -5

if (time >= 0 && time < 12) {
    console.log('Good Morning')
} else if (time >= 12 && time < 17) {
    console.log('Good Afternoon')
} else if (time >= 17 && time <= 23) {
    console.log('Good Evening')
} else {
    console.log('Invalid Time')
}

let currentdate = new Date();
console.log(currentdate)
let gethours = currentdate.getHours()
let getminutes = currentdate.getMinutes();
console.log(gethours);
console.log(getminutes);

// for loop
for (let i = 0; i < 50; i++) {
    console.log(i)
}

let cars = ['Toyota', 'Honda', 'Mazda', 'Ferrari', 'Lambo', 'Mercedes', 'BMW', 'Audi', 'porsche', 'Jaguar']
for (let i = 0; i < cars.length; i++) {
    console.log('The name of the cars are: ' + cars[i]);

}
console.log(cars[0])

// while loop
let i = 0
while (i < cars.length) {
    console.log(cars[i]);
    i++;
}
console.log(i)
