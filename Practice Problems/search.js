// Homework: 1
// write a function that will take 3 numbers will return the max number
// Write a function that will take 3 parameters and will return the min number

// first time do it using if-else
// second time do it using Math.min or Math.max

// Homework: Write a function to get the lowest number in an array



function maxInArray(numbers){
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        // console.log(index, element);
        if (element > largest) {
            largest = element
        }
    }
    return largest
}

const heights = [167, 190, 120, 333, 137, 265];
const tallest = maxInArray(heights);
console.log(tallest);










const 