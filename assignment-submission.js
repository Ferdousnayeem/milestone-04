function mindGame(numberInput) {
    if (numberInput < 0 || isNaN(numberInput) === true) {
        return "You've entered an invalid input. Please enter a positive number to get result."
    }
    else {
        let multipliedBy = numberInput * 3;
        let addedBy = multipliedBy + 10;
        let dividedBy = addedBy / 2;
        let substractedBy = dividedBy - 5;
        return substractedBy;
    }
}


function evenOdd(inputString) {
    if (isNaN(inputString) === false) {
        return "You've entered an invalid input. Please enter a word to get result."
    }
    else {
        if (inputString.length % 2 == 0) {
            return 'even';
        } else {
            return 'odd'
        }
    }
}


function isLGSeven(luckyNumber) {
    if (isNaN(luckyNumber) === true) {
        return "You've entered an invalid input. Please enter a number to get result."
    }
    else {
        const numberDifference = luckyNumber - 7;
        if (numberDifference < 7) {
            return numberDifference;
        } else {
            return luckyNumber * 2
        }
    }
}


function findingBadData(inputArray) {
    if (Array.isArray(inputArray) === false) {
        return "You've entered an invalid input. Please enter an array to get result."
    }
    else {
        let count = 0;
        for (let i = 0; i < inputArray.length; i++) {
            const element = inputArray[i];
            if (element <= 0) {
                count = count + 1;
            }
        }
        return count;
    }
}


function gemsToDiamond(firstFriend, secondFriend, thirdFriend) {
    if ((firstFriend < 0 || isNaN(firstFriend) === true) ||(secondFriend < 0 || isNaN(secondFriend) === true) ||(thirdFriend < 0 || isNaN(thirdFriend) === true)) {
        return "You've entered an invalid input. Please enter a positive number to get result."
    }
    else{
        const firstOne = 21;
        const secondOne = 32;
        const thirdOne = 43;
        const firstOnesDiamond = firstFriend * firstOne;
        const secondOnesDiamond = secondFriend * secondOne;
        const thirdOnesDiamond = thirdFriend * thirdOne;
        const totalDiamond = firstOnesDiamond + secondOnesDiamond + thirdOnesDiamond;
        if (totalDiamond < 1000 * 2) {
            return totalDiamond;
        } else {
            return totalDiamond - 2000;
        }
    }
}