

/* function feetToInch(feetInput){
    const feet = 12;
    let inch = feetInput * feet;
    return inch;
}

const feetInput = feetToInch(5) */
// console.log(feetInput, 'inch');



/* function centimeterToMeter(centimeterInput){
    const centimeter = 0.01; 
    let meter = centimeterInput * centimeter;
    return meter;
}

const centimeterInput = centimeterToMeter(550) */
// console.log(centimeterInput, 'meter');


/* function paperRequirements(book01, book02, book03){
    const book1 = 100;
    const book2 = 200;
    const book3 = 300;
    let paperRequiredForBook1 = book1 * book01;
    let paperRequiredForBook2 = book2 * book02;
    let paperRequiredForBook3 = book3 * book03;

    const totalPaperRequired = paperRequiredForBook1 + paperRequiredForBook2 + paperRequiredForBook3;

    return totalPaperRequired;
}


const booksInput = paperRequirements(5, 3, 2) */
// console.log(booksInput);


/* let friends = ['sajid', 'mamun', 'kamal', 'jubayer bin rased', 'chinku'];

function bestFriend(friend){
    let biggest = friend[0];
    for (let i = 0; i < friend.length; i++) {
            // console.log(friend[i]);
            if (friend[i].length > biggest.length) {
                biggest = friend[i];
                // console.log(biggest);
            }
    }
    return biggest;
}

const biggestOneIs = bestFriend(friends); */
// console.log(biggestOneIs);


/* const positiveArray = [45, 87, 96, 11, 63, -56, 71, 28];

function onlyPositive(numbers){
    let newArray = [];
    for (let i = 0; i < numbers.length; i++) {
        let number = i;
        let element = numbers[number];
        newArray.push(element);
        if (element < 0) {
            break
        }
    }
    return newArray;
}

const positiveOnly = onlyPositive(positiveArray) */
// console.log(positiveOnly);





//.............................
//      Practice Module
//..............................






// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 


/* function multiplicationTable(input){
    for (let i = 1; i <= 10 ; i++) {
        const number = i;
        let calculation = input * number;
        console.log(`${input} x ${number} = ${calculation}`);
    }
    return 
}

const tableOfMultiplication = multiplicationTable(13); */
// console.log(multiplicationTable);


// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।


/* function changeCaseToLower(input){
    const textInput = input.toLowerCase()
    // console.log(textInput);
    return textInput
}

const text = 'ABDUL QUAIUM'
const inputText = changeCaseToLower(text);
console.log(inputText); */

// ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 


/* function fullName(name1, name2) {
    nameComplete = name1 + ' ' + name2;
    return nameComplete;
}

const firstName = 'Chinku';
const lastName = 'Minku';
const name = fullName(firstName, lastName); */
// console.log(name);


// ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে। অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।  


/* function squareNumber(input){
    const number = input * input;
    return number;
}

const inputNumber = 5;
const numberInput = squareNumber(inputNumber); */
// console.log(numberInput);


// ৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :

/* const pizza = {
 toppings: ['cheese', 'sauce', 'pepperoni'],
 crust: 'deep dish',
 serves: 2
}
এবং pepperoni print করবা। */

const pizza = {
 toppings: ['cheese', 'sauce', 'pepperoni'],
 crust: 'deep dish',
 serves: 2
}

const item = pizza.toppings.indexOf('pepperoni');
const itemConfirmed = pizza.toppings[item];

// console.log('item is: ', itemConfirmed, 'and the index is:', item);


for (let i = 1; i <= 10; i++) {
    // console.log(i, 'I am sorry!');
}



