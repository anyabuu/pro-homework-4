const first_num = prompt('Please, enter first number');
const second_num = prompt('Please, enter second number');
const operation = prompt('Please, choose operation + - * /');
let result;

textResult(first_num, second_num);

function textResult(first_num, second_num) {
   if (operation === "+") {
        result = Number(first_num) + Number(second_num);
    } else if (operation === "-") {
        result = Number(first_num) - Number(second_num);
    } else if (operation === "*") {
        result = Number(first_num) * Number(second_num);
    } else if (operation === "/") {
        result = Number(first_num) / Number(second_num);
    } else {
        return alert("You`ve chosen incorrect operation!");
    }

  console.log(`Result: ${first_num} ${operation} ${second_num} = ${result}`);
}



