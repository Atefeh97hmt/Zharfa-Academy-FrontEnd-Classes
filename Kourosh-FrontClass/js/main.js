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


// array

// 1
let fruits = ["watermelon", "banana", "apple"];

console.log(fruits[0]);

fruits[1]= "orange";
console.log(fruits);

fruits[2] = "grape"
console.log (fruits);

// 2
let colors = new Array("red", "blue", "green", "white");
console.log(colors);

colors[3]="black";
console.log(colors);

console.log(colors.length);


let nums = [1, 2];
nums.push(3);
console.log(nums);

nums.push(4);
console.log(nums);

nums.pop();
console.log(nums);


nums.unshift("50");
console.log(nums);

nums.shift();
console.log(nums);



let cities = ["Tehran", "shiraz", "yazd", "alborz", "tabriz"]
console.log(cities);

cities.push("isfahan");
console.log(cities)

cities.shift();
console.log(cities)





let numbers = [2, 5, 8, 9, 1, 6]
console.log(numbers);

numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);


let fruitss = ["apple", "banana", "cherry"];
let result = fruitss.join("-");
console.log(fruitss);
console.log(result);


let names = ["ali", "majid", "davood", "behzad"]
console.log(names);

names.sort();
console.log(names)

let boys = "Ali,Reza,Koroush"
let boyss = boys.split(",");
console.log(boys);
console.log(boyss);

