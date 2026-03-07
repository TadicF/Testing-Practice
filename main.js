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

const calculator = {
    add: (a, b) => {

    },
    subtract: (a, b) => {

    },
    divide: (a, b) => {

    },
    multiply: (a, b) => {

    }
}

