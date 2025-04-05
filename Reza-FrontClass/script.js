console.log("this is my message");
// alert ("this is my message 2");
console.error("this is error");
console.warn("this is warn");

var text = "Hellow, javascript";
console.log(text);
console.log(text.length);
console.log(text.toUpperCase());

var price = 1500;
var x = 2;
console.log (price * x);
console.log (x);


var isOnline = true;
// var isOnline = false;
console.log (isOnline);

// var a ="blue";
// var b ="red";
// var c = "green";


var colors =[ "blue", "red", "green", "black" ];
// console.log(colors);
console.log(colors[3]);

// operators
var a = 3;
var b = 2;
console.log(a ** b);

// ==
// =!
// <
// >
// =>
// =<

var number = 7;
if(number % 2 == 0)
{
console.log("this number is even")
} else {
    console.log("this number is odd")
}


var score = 65;
 if(score>= 95){
    console.log ("the score is A");
 } else if (score >= 80){
    console.log("the score is B");
 } else if (score >= 70)
{
    console.log("the score is C");
} else {
    console.log("the score is reject")
}



var day = "charshanbeh"
switch (day){
    case "shanbeh":
        console.log("aval hafteh");
break;
case "yekshanbeh":
    case "doshanbeh":
        case "seshanbeh":
            console.log("rooz hayeh kari");
            break;
case "panjshanbeh":
    case "jomeh":
        console.log("tatil")
        break;
        default:
            console.log("na motabar");

}


var grade = "D"
 switch (grade){

case "A":
    console.log("your grade is perfect");
    break;
    case "B":
        console.log("your grade is very good");
        break;
        case "c":
            console.log("your grade is good");
break;
case "D":
    console.log("your grade is not bad");
    break;

default:
    console.log("your grade is reject");




 }
