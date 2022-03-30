//ASSIGNMENT
//1. Write a javascript function that returns the minimum number in an array
function minNum(minArr) {
    var minResult = minArr[0];
    for (var i = 1; i < minArr.length; i++) {
        if (minArr[i] < minResult) {
            minResult = minArr[i];
        }
    }
    return minResult;
}
const minArr = [12, 35, 6, 4, 8, 9, 5, 123];
console.log(minNum(minArr));

//2. Write a javascript function that returns the maximum number in an array
function maxNum(maxArr) {
    var maxResult = maxArr[0];
    for (var i = 1; i < maxArr.length; i++) {
        if (maxArr[i] > maxResult) {
            maxResult = maxArr[i];
        }
    }
    return maxResult
}
const maxArr = [12, 35, 6, 4, 8, 9, 5, 123];
console.log(maxNum(maxArr));

//3. Write a function that returns all odd and even number
function oddAndEven(num) {
    var oddResult = [];
    var evenResult = [];
    for (var i of num) {
        if (i % 2 == 0) {
            evenResult.push(i);
        } else {
            oddResult.push(i);
        }
    }
    if (evenResult.length == 0) {
        console.log("Even numbers: none");
    } else {
        console.log(`Even numbers: ${evenResult}`);
    }
    if (oddResult.length == 0) {
        console.log("Odd numbers: none");
    } else {
        console.log(`Odd numbers: ${oddResult}`);
    }

}
const num = [12, 35, 6, 4, 8, 9, 5, 123];
oddAndEven(num);

//4. Write a javascript function that returns all prime numbers
function checkPrime(val) {
    for (var i = 2; i < val; i++) {
        if (val % i == 0) {
            return false;
        }
    }
    return true;
}

function printPrime() {
    var primeArr = [];
    const test = [12, 35, 6, 4, 8, 9, 5, 123];
    for (var j = 0; j < test.length; j++) {
        if (checkPrime(test[j])) {
            primeArr.push(test[j]);
        }
    }
    if (primeArr.length == 0) {
        console.log("No prime numbers found");
    } else {
        console.log(primeArr);
    }
}
printPrime();