/* var onionPrice = 20;
var eggPrice = 10;

console.log(onionPrice); */


/* var num1 = 0.1;
var num2 = 0.2;

var sum = num1 + num2;
    sum = sum.toFixed(2);
    sum = parseFloat(sum); অথবা,
    sum = parseInt(sum);

console.log(sum); */


// while loop

/* var oddNumber = 0;
while(oddNumber <= 10){
    console.log(oddNumber);
    oddNumber = oddNumber + 2
} */

// for loop

/* for (var oddNumber = 0; oddNumber < 10; oddNumber++){
                                                        
    console.log('counting');
    console.log(oddNumber);
} */


// simple version of for loop

/* console.log('ki khobor? valo?');

for (let i = 0; i < 5; i++) {
    console.log(i);
} */


// var numbers = [45, 87, 89, 56, 23, 32, 25, 51];

// for (let i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     if(number > 50){
//         continue; /* skip করার জন্য */ 
//     }
//     console.log(number);
// }



/* var array = [3, 205, 6, 54, 80, 97, 10, 25, 4, 98];

for (let index = 0; index < array.length; index++) {
    const indexNumber = array[index];
    if (indexNumber > 25) {
        continue;
    }
    console.log(indexNumber);   
} */


/* function samosaKhamu(taka){
    var samosaPrice = 8;
    var samosaQty = taka / samosaPrice;
    return samosaQty;
}


var takaDisi = 120;
var samosa = samosaKhamu(takaDisi);
console.log(samosa, 'ta samosa khamu ajke'); */


/* var mobile = {
    brand: 'Samsung',
    color: 'black',
    ram: '4GB',
    rom: '64GB',
    price: 16999,
    accessories: 'charger only'
}

var mobileBrand = mobile.brand;

var mobileBrandAlt = mobile['brand'];

var mobileProperty = 'brand'

var mobileBrandAlt2 = mobile[mobileProperty];

console.log(mobileBrand, mobileBrandAlt, mobileProperty, mobileBrandAlt2);

var properties = Object.keys(mobile);
or,
console.log(Object.keys(mobile)); */


/* var mobile = {
    brand: 'Samsung',
    color: 'black',
    ram: '4GB',
    rom: '64GB',
    price: 16999,
    accessories: 'charger only'
}

// console.log(Object.entries(mobile));

var keys = Object.keys(mobile);
// console.log(keys);

var values = Object.values(mobile);
// console.log(values);

/* for (var i = 0; i < keys.length; i++) {
    var properties = keys[i];
    var propertyValue = mobile[properties]
    console.log(properties, ':', propertyValue);
    
} */

/* for(var propertyName in mobile){
    var value = mobile[propertyName]
    console.log(propertyName, ':', value);
} */



const color = 'blue';
/*
if (color === 'green') {
    console.log('this is green color');
} 
else if(color === 'yellow'){
    console.log('this is yellow color');
}
else if(color === 'blue'){
    console.log('this is blue color');
}
else if(color === 'black'){
    console.log('this is black color');
}
else if(color === 'white'){
    console.log('this is white color');
}
else if(color === 'gray'){
    console.log('this is gray color');
}
else{
    console.log('this is pink color');
} */


// switch
/* switch (color) {
    case 'black':
    console.log('this is black color');
    break;
    case 'red':
    console.log('this is red color');
    break;
    case 'purple':
    console.log('this is purple color');
    break;
    case 'blue':
    console.log('blue color has been detected');
    break;
    default:
        console.log('blue is not detected');
    break;
} */


/* var daysInWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

var wordsInSentence = 'The clever fox jumps over the lazy dog!'


for (let i = 0; i < daysInWeek.length; i++) {
     console.log(daysInWeek[5]);
} */


/* function meterToFeet(inch) {
    const meter = inch * 0.0254;
    return meter;
}

// const measurementInInch = 480;
const measurementInMeter = meterToFeet(920);

console.log(measurementInMeter); */


/* function oddOrEvenNumber(number) {
    const remainder = number % 2;
    if (remainder === 0) {
       return true;
    } else {
       return false;
    }
}

const myNumber = oddOrEvenNumber(2658950);
console.log(myNumber);
const herNumber = oddOrEvenNumber(3256325);
console.log(herNumber); */


/* function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    } else {
        return false;
    }
}

const myYear = isLeapYear(1952);
console.log(myYear); */


// get sum of numbers in an array

/* function sumOfArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        let indexNumber = i;
        let element = numbers[indexNumber]
        sum = sum + element;
        console.log(indexNumber, element, sum);
    }
    return sum
}

const myNumbers = [25, 25, 35, 54, 46, 85, 78, 65, 22];
let total = sumOfArray(myNumbers)
console.log(total); */



// get sum of odd/even numbers in an array

/* function addEvenNumbers(evenNumbers){
    let sum = 0
    for(let i = 0; i < evenNumbers.length; i++){
        let indexNumber = i;
        let element = evenNumbers[indexNumber]
        let evenNumber = element % 2
        if(evenNumber !== 0){
            sum = sum + element
        }
    }
    return sum
}

const myNumbers = [25, 25, 35, 54, 46, 25, 78, 25, 22];
let total = addEvenNumbers(myNumbers)
console.log(total); */





/* function solution(letter) {
    let letterInput = letter.toLowerCase();
    if (letterInput === 'a') {
        return 'the letter is a vowel';
    } 
    else if(letterInput === 'e'){
        return 'the letter is a vowel';
    }
    else if(letterInput === 'i'){
        return 'the letter is a vowel';
    }
    else if(letterInput === 'o'){
        return 'the letter is a vowel';
    }
    else if(letterInput === 'u'){
        return 'the letter is a vowel';
    }
    else return 'the letter is a consonant';
}

let userInput = solution('O');
console.log(userInput); */





