// -------------------1--------------

// https://ecma-international.org/publications-and-standards/standards/ecma-262/

const accountid = 17654
// const doest not change, not allowed

let accountemail = "iohef@gami.com"
accountemail = " hf@hf.com"
// can be change

var accountpassword = "644"
accountpassword = "lff91247"

let accoi;
// also can be changed
/*
prefer not use var 
because of issue in block scope and functional scope 

*/
accountcity = "delhi"

console.log(accountid)

console.table([accountemail,accountid,accountpassword,accoi]);

// --------------2-----------------
let name ="divu";
let age= 19;
let islog = false;

// number 2^53
// bigint for big numbers
// string ""
// boolean - true ; false
// null - stand alone value
// undefined - value defined nhi kari 
// symbol - unique


//  object 

console.log(typeof age);
// type bta dega

//  undefined ka type undefined hai 
// null ka type object hai 
 
// ---------------3-------------
let score =33;
let score2 = "33";

console.log(typeof score);
console.log(typeof(score2));

let valueInNum = Number(score2);
console.log(typeof valueInNum);


let islogged = "";
// 1== true/ 0 ==false
// "" == false
// "divu" == true
let boolislogged = Boolean(islogged);
console.log(boolislogged);

let somenum = 90;
let stringnum = String(somenum);
console.log(stringnum);
console.log(typeof stringnum);

// ---------4-------------
// opertions 
let value = 3;
let negval = -value;

console.log(negval);

let str1 = "hello";
let str2 = "hitesh";

let str3 = str1 + str2;
console.log(str3);


console.log("1" + 2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");
console.log((3+4)*5%3);

console.log(true);
console.log(+true);
console.log(+"");

let num1,num2,num3;

num1 = num2 = num3 = 2 + 2;
console.log(num1);
let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

// camparisions of dataype

// console.log(2>1);
// and so on .... >= == <= < > !=

// console.log("2" > 1);
// console.log("02" >1);

// console.log(null>0);
// console.log(null=0);
// console.log(null>=0);
// doubtfull things  



// primitive datatypes
// 7 types = string , number , boolean , null , undefined , undefined , symbol , BigInt

const score = 100;
const scorevalue = 100.3;
const islogg=true;
const out = null;
let email;
const biginteger = 87986551354165498765432168798n

const id = Symbol('123');
const anotgerId = Symbol('123');

console.log(id == anotgerId);
// false

// Reference (non primitive)
// Array, Objects , Functions

const heros = ["shakti", "naarag" , "dog"];
let myObj = {
    name : "divu",
    age : 22,
}

const myfunction = function(){
    console.log("heelo divu");
}

console.log(typeof myObj);

// stack memory for primitive datatype 
// heap memory for non primitive datatypes 
// 

// ------------------5----------------

const name = "divu";
const age = 19;

// old way may use karo 
console.log(name + age + "value");

//  new use 
console.log(`hello my name is ${name} and my age is ${age}`);


const gamename = new String('divyanshSharma');

console.log(gamename.length);
// all javascript  methods
// search on MDN

//  --------------numbers --------

const score = 400;
console.log(score);

const bal = new Number(100);
console.log(bal);

console.log(bal.toString().length);
// ab string ke bhi library methods lga sakte hai 
// MDN
// number k bhi methods hai kaafi saare 


// =========MATHS===========

// java waale hi hain jo kaam aaynge 
// math.random() iski value 0->1 aati hai 
// values a se b k beech chahiye 

const min =10;
const max = 20;
// formula for generating random no. in range 
console.log(Math.floor(Math.random()* (max-min+1) ) + min);

// Dates in javascript 

let mydate = new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);
// month 0 se start hote hai isme 
// let cratedate = new Date(2023 , 0 ,23);
// let cratedate = new Date(2023 , 0 ,23,5,3);
// let cratedate = new Date("01-14-2023");
// console.log(cratedate.toLocaleString());

// let cratedate = Date.now();
// console.log(cratedate);

let newdate = new Date();

console.log(newdate);
console.log(newdate.getDay());
console.log(newdate.getMonth());
// or bhi hai  

newdate.toLocaleString('default',{

    weekday: "long",
    
});



// ------------6-----------------
//                     // Arrays in javascript

// const arr = [1,2,54,6];
// // they are resizable 
// console.log(arr[2]);

// const name = ["anu" , "divu"];

// const arr2 = new Array(1,2,5,6);
// console.log(arr2[2]);

// // nya element daalne k liy 
// arr.push(8);
// console.log(arr);
// arr.pop();
// console.log(arr);

// // shuru me daal diya element 
 
// arr.unshift(2);
// console.log(arr);

// arr.shift(0);
// console.log(arr);

// console.log(arr.includes(54));
// console.log(arr.indexOf(6));

// // slice, splice

// console.log("a" , arr);
// console.log(arr);

// const arr3 = arr.slice(1,3);
// console.log(arr3);

// const arr4 = arr.splice(1,3);
// console.log("b",arr);
// console.log(arr4);

const marvel_hereoes = ["thor" , "ironman" , "spiderman"];
const dc_hero = ["batman" , " superman"];

// marvel_hereoes.push(dc_hero);
// console.log(marvel_hereoes);
// dikkat hai 

const arr = marvel_hereoes.concat(dc_hero);
console.log(arr);

const arr2 = [1,2,3,4,[6,7,8],8,[6,5,4,[6,7]]];
console.log(arr2);

const arr3 = arr2.flat(Infinity);
console.log(arr3);

let a = 100;
let b = 190;
let c = 89;

console.log(Array.of(a,b,c));

// -------------7---------------
//  objects in javascript


const mysym = Symbol("key1");

const user ={

    name : "divu",
    class : "cse2",
    rollno : 18,
    [mysym] : "key2",
    location : "delhi",
    islog : true,
    days :["mon","tue"]

};

console.log(user.name); 
console.log(user["days"]);
console.log(user[mysym]);


user.name = "anu";
console.log(user.name);

user.greeting = function(){
    console.log("hello buddy");
}
user.greeting2 = function(){
    console.log(`hello buddy, ${this.name}`);
}

console.log(user.greeting());
console.log(user.greeting2());

//  objects 2 in javascript;

// const tinderUser = new Object();

const tinderUser ={};

const regularUser ={

    email : "divu!gaiml.com",
    fullname :{
        userfullname :{

            first :"divu",
            last : "sharma"

        }


    }


}

console.log(regularUser.fullname.userfullname.first);

// ---------8-------------



