// function add(a, b){
// return a + b;
// }
// console.log(add(5, 3));


let result = '';

function press (value){
    // result = value + result;
    result += value;
    document.getElementById('result').innerText = result;
}

function clearResult(){
    result = '';
    document.getElementById('result').innerText = '0';
}


function calculate(){

    const answer = eval (result);
    document.getElementById('result').innerText = answer;
    result.answer.toString();


}