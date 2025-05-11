var x = 2 ;
let a = 3;

const b = 3.14;

let name = "Reza";
let age = 2;
let isStudent = true;

let fruits = ["apple", "banana", "orange", "5"];
let numbers = [1, 2, 3, 4];

let colors = new Array ("red", "blue", "green");
let colorss = ["red", "blue", "green"];

let cities = ["tehran", "shiraz", "alborz", "mashhad", "yazd"];
console.log(cities);
console.log("tehran");
console.log(cities[0]);
console.log(cities[3]);

cities[1] = "isfahan";
console.log(cities);

console.log(cities.length);

let myarr = [2, "sara", "mary", 5, 10];
console.log(myarr);


let nums = [1, 2, 3, 4, 5, 6];
console.log(nums)

nums.push(50);
console.log(nums);


nums.pop();
console.log(nums);

nums.unshift("sara");
console.log(nums);

nums.unshift("Reza");
console.log(nums);

nums.shift();
console.log(nums);



let students = ["ali", "sasan", "5698", "reza", "3"];
console.log(students);

students[2] = "10";
console.log(students);

students.shift();
console.log(students);




let myNumbers = [1, 8, 6, 7, 3, 2];
console.log(myNumbers);

myNumbers.sort();
console.log(myNumbers);

myNumbers.reverse();
console.log(myNumbers);


let anamial = ["bear", "dog", "cat"];
console.log(anamial);
let animalstr= anamial.join("-");
console.log(animalstr);

let str = "ali,reza,sara";
console.log(str);
let names = str.split(",");
console.log(names);


// object
// key:value


let person = {
name: "ali",
age: 25,
isStudent:true,
}


// dot notation

console.log(person.name);
console.log(person.age);


// bracket notation
console.log(person["name"])


person.age = 30;
person.name="reza";
// person["name"] = "reza";
console.log(person)


person.city = "tehran";
person["job"] = "developer";

console.log(person)



delete person.isStudent;
console.log (person);


let student ={
    name:"sara",
    age: 20,
    address: {
        city: "shiraz",
        postalcode:"123456"
    }
};

console.log(student.address.city);


let product ={

name:"laptop",
price:200000,
isAvailable: true,

}

console.log("product name: product.name , price: product.price");
console.log(` esm mahsole: ${product.name} ,  price: ${product.price} `)



// for loop

// for (start; condition; change){
//     code
// }

// 1 to 5
for (let i=1; i<=5; i++){
    console.log(i);
};


for(let m=1; m<=10; m++)
{
    console.log(m);


};

// for (let n = 5; n >= 1; n--){
//      console.log(i);
//  }


for (let n = 10; n>=0; n--){
     console.log(n)
};


// while

// while (condition) {
//     code
// }

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}


let person2 ={
    family:"rezaei",
    age:25,
    city:"tehran"
}


for(let key in person2){
    console.log(key + ":" + person2[key])
}

