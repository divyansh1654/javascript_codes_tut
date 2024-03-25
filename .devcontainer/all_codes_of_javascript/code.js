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
const tinderuser = {};
tinderuser.id = "123rgf";
tinderuser.name = "divu";
tinderuser.islog= true;

console.log(tinderuser);

// objects me objects

const regularUser = {

    email : " divu@hiuhf.com",

    fullName:{
        usermname:{
                firstname: "divu",
                lastname : "sharma",
        }
    }

}
console.log(regularUser.fullName.usermname.firstname);

const obj1 = {1 :"a" , 2:"b"};
const obj2 = {2 :"a" , 3:"b"};
const obj3 = {6 :"a" , 5:"b"};

const obj6 = {obj1,obj2};
console.log(obj6);

const obj4 = Object.assign({},obj1,obj2,obj3);
console.log(obj4);
const obj5 = {...obj1,...obj2};
console.log(obj5);

const user =[

    {
        id : 1,
        email :"divu@giaj.com",

    },
    {
        id : 2,
        email :"di343@giaj.com",

    },
    {
        id : 3,
        email :"r3r3vu@giaj.com",

    },
    {
        id : 4,
        email :"gfdivu@giaj.com",

    },

    ]

    console.log(user[1].email);
    console.log(tinderuser);
    console.log(Object.keys(tinderuser));
    console.log(Object.values(tinderuser));

// objects video further

const course = {

    coursename :"js learn",
    price :"098",
    courseid :"78",
}
// destructure objects 
const {coursename : name1} = course;
// console.log(coursename);
console.log(name1);


// -------9------
// function and paramaetres

function saymyname(){
    console.log("d");
    console.log("i");
}

saymyname();

function addtwonum(num1,num2){
    console.log(num1+num2);
}

addtwonum(3,4);
function addtwonum2(num1,num2){
    return (num1+num2);
}
const res = addtwonum2(3,6);
console.log(res);

function loginuser(username){

    return `${username} just loggedin` ;

}
console.log(loginuser(89));
// default set krna hia to 
function loginuser2(username="sam"){

    return `${username} just loggedin` ;

}
console.log(loginuser2());

// functions with objects

function calculate(...num1){
    return num1;
}

console.log(calculate(900,88,789,98));

const user2={
    username:"divu",
    price :90,
}

function handle(anyobject){
        console.log(`username is ${anyobject.username} and price id ${anyobject.price}`);
}

handle(user2);

// --------10--------

// // const coding = ["js","ruby","java","cpp"];

// // const values = coding.forEach((items)=>{
// //     console.log(items);
// // })

// const mynums =[1,2,3,4,5,6,7,8,9];

// // const newnums = mynums.filter( (num)=>num>4 );
// // console.log(newnums);

// const newnums =[];
// mynums.forEach( (num)=>{
//     if(num>4){
//         newnums.push(num);
//     }
// } )
// console.log(newnums);


// const userbooks = [

//     {
//         username :"divu",
//         title : "maths",
//         age : 19,
//     },
//     {
//         username :"anusha",
//         title : "eng",
//         age : 78,
//     },
//     {
//         username :"ansu",
//         title : "sst",
//         age : 69,
//     },
//     {
//         username :"anus",
//         title : "hindi",
//         age : 18,
//     },
// ];

// const a1 = userbooks.filter((items)=>{
//         return items;
// })
// console.log(a1);
// const a2 = userbooks.filter((items)=>{
//     return items.age>70;
// })
// console.log(a2);

// const mynums = [1,2,3,4,5,6,7,7,8,9];

// const newnums = mynums.map( (nums)=> nums+10 );
// console.log(newnums);

// reduce maps js

// const mynums = [1,2,3];
// const mytotal = mynums.reduce(function (acc , curval){
//     console.log(`acc : ${acc} curval : ${curval}`);
//     return acc + curval;
// },0)
// console.log(mytotal); 


