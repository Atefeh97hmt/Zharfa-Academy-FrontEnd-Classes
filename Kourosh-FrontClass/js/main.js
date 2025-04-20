console.log("hi javascript");
console.error("this is error");
console.warn("this is warning");

var text = "hi ali"  //string
console.log(text);
console.log(text.length);
console.log(text.toUpperCase());

var price = 1600;  //number
var price2 = "1500";  //string

var isOnline = true;  // boolean
var isOnline = false;


var x = 2;

//  +
//  -
//  *
//  /
//  %
//  **
// =
// <
// >
// <=
// >=


var a = 2 ;
var b = 10 ;
// var z = a + b;
console.log (a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);


var name = "ali";
var age = 25;
var intro = ` I am ${name}, and my age is ${age} `;
console.log(intro);


// if condition

var age2 = 15;
if (age2 >= 18){
    console.log("your age is valid");
} else {
    console.log("your age is invalid")
};


var score = 17;
if (score > 17){
    console.log("very good");
} else if (score > 15){
    console.log("good");
}
else{
    console.log("bad")
}



// let x = 2;

// const a = "ali";


let day = "yekshanbeh222";

switch (day){

    case "shanbeh":
    console.log("aval hafteh");
    break;

    case "yekshanbeh":
    console.log("dovom hafteh");
    break;


    case "doshanbeh":
        console.log("sevom hafteh");
        break;

        default:
            console.log("akhar hafteh");

}


let temp = 18;

switch (true){

case (temp < 0):
    console.log("kheyli sard");

    break;

    case (temp >= 0 && temp <20):
        console.log("sard");
        break;

        case (temp >= 30):
            console.log("garm");
            break;

            default:
                console.log("motdel");
    
}


// loop

// 1. for

// for (start; condition; change){


// }


// 1 to 5
for (let i = 1; i <= 5; i++){

console.log(i);

}

// 5 to 10
for (let i= 5; i <= 10; i++){
    console.log(i);
}



for (let i = 10; i >=0; i--){
    console.log(i);
}


// for (let i = 10; i >=0; i**){
//     console.log(i);
// }



for (let i = 1; i <= 5; i++){

    console.log("koroush")
}


















