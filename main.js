export function capitalize(string) {
    const firstLetter = string.slice(0, 1);
    const rest = string.slice(1);
    return firstLetter.toUpperCase().concat(rest);
}

export function reverseString(string) {
    const strArr = string.split('');
    const reverseArr = [];
    for(let i = strArr.length - 1; i >= 0; i--) {
        reverseArr.push(strArr[i]);
    }
    return reverseArr.join('');
}

export const calculator = {
    add: (a, b) => {
        return a + b;
    },
    subtract: (a, b) => {
        return a - b;
    },
    divide: (a, b) => {
        if(b !== 0) {
            return a / b;
        }
        return undefined;
    },
    multiply: (a, b) => {
        return a * b;
    }
}

export function caeserCipher(string, shiftFactor) {
    const cipherArr = [];

    for(let i = 0; i < string.length; i++) {
        let charCode = string.charCodeAt(i);
        let cipherCode = charCode + shiftFactor;
        
        if(Checks.upperCase(charCode)) {
            cipherCode = cipherCode > 90 ? 64 + (cipherCode - 90) : cipherCode;
        } else {
            cipherCode = cipherCode > 122 ? 96 + (cipherCode - 122) : cipherCode;
        }

        if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            cipherArr.push(String.fromCharCode(cipherCode));
        } else {
            cipherArr.push(String.fromCharCode(charCode));
        }
    }
    return cipherArr.join('');
}

const Checks = {
    upperCase: (charCode) => {
        if(charCode >= 65 && charCode <= 90) return true;
        return false;
    },
    lowerCase: (charCode) => {
        if(charCode >= 97 && charCode <= 122) return true;
        return false;
    }
}

export function analyzeArray(arr) {
    return { 
        length: arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        average: getAverage(arr), 
    }
}

function getAverage(arr) {
    let sumAll = 0;
    arr.forEach((num) => {
        sumAll += num;
    })

    return Math.round(sumAll / arr.length);
}