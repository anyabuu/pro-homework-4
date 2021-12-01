const first_num = prompt('Please, enter first number');
const second_num = prompt('Please, enter second number');
const operation = prompt('Please, choose operation + - * /');

if (operation === "+") {
    calcSum(first_num, second_num)
} else if (operation === "-") {
    calcSub(first_num, second_num)
} else if (operation === "*") {
    calcMulti(first_num, second_num)
} else if (operation === "/") {
    calcDiv(first_num, second_num)
} else {
    alert("You`ve chosen incorrect operation!")
}

function calcSum(first_num, second_num) {
    const result = Number(first_num) + Number(second_num);
    console.log(`Result: ${first_num} + ${second_num} = ${result}`);
}

function calcSub(first_num, second_num) {
    const result = Number(first_num) - Number(second_num);
    console.log(`Result: ${first_num} - ${second_num} = ${result}`);
};

function calcMulti(first_num, second_num) {
    const result = Number(first_num) * Number(second_num);
    console.log(`Result: ${first_num} * ${second_num} = ${result}`);
};

function calcDiv(first_num, second_num) {
    const result = Number(first_num) / Number(second_num);
    console.log(`Result: ${first_num} / ${second_num} = ${result}`);
}



