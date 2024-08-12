function findDuplicates(arr) {
    const count = {};
    const duplicates = [];

    arr.forEach(num => {
        count[num] = (count[num] || 0) + 1;
    });

    for (const [num, freq] of Object.entries(count)) {
        if (freq > 1) {
            duplicates.push(Number(num));
        }
    }

    return duplicates;
}


const array = [1, 2, 3, 4, 2, 5, 6, 1, 7];
console.log(findDuplicates(array)); 

///////////////////////
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function findPrimesInRange(start, end) {
    const primes = [];

    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}


const start = 10;
const end = 30;
console.log(findPrimesInRange(start, end)); // [11, 13, 17, 19, 23, 29]
///////////////////////
function sortWordsByLength(sentence) {
    const words = sentence.split(' ');

    words.sort((a, b) => a.length - b.length);

    return words.join(' ');
}


const sentence = "هذه جملة تحتوي على كلمات متعددة";
console.log(sortWordsByLength(sentence)); 

/////////////////////////////
function filterArray(arr, callback) {
    const result = [];

    arr.forEach(element => {
        if (callback(element)) {
            result.push(element);
        }
    });

    return result;
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const isEven = num => num % 2 === 0;

console.log(filterArray(numbers, isEven)); 





