
// 1. Conditional
// 2. Loop
// 3. Function



//alert('Sabdhan hoye jao Pollob');

/* let Name = 'Sajid Ahmed';

console.log(Name)

let Name = 'Sajid Ahmed';

console.log(Name)

let a = 10
if(a<15){
    console.log('a is less than 10');
}
else{
    console.log('a is equal to 10')
}
else if(a>5){
    console.log('a is greater than 5')
}

let a = '16', b=20
if(a===b){
    console.table('a is a number')
}
else{
    console.table('is a string')
}
if(typeof a == 'string'){
    console.log(typeof a)
}

let mark = 53;

switch(true){
    case (mark>=33 && mark<40): console.log('E');
    break;
    case (mark>40 && mark<50): console.log('D');
    break;
    case (mark>50 && mark<60): console.log('C');
    break;
    case (mark>60 && mark<70): console.log('B');
    break;
    case (mark>70 && mark<80): console.log('A');
    break;
    case (mark>80 && mark<100): console.log('A+');
    break;
    default:console.log('He/She is Fail');
}

for(let odd=1; odd<100; odd=odd+2){
    console.log('here ' + odd) ;
}

let a = 5;

while(a*a < 1678){
    console.log('Here is ${a=a*a}');
}

let x = 50;

function checkOddEven(x){
    if(x/2>=60){
        console.log('x greater than 50');
    }
    else console.log('x is lower than 50')
}
checkOddEven(x);

function multi(a, b){
    console.log(a*b)
}
multi(3, 5);

let sum = 1;
function div(a, b){
    for(a; a<b; a++){
        sum = a+sum;
    }
    console.log(sum/3);
}
div(10, 20);

function sajid(a, b, c){
    
}
sajid(66, 88, 77);*/


// var a = 50;
// var b = 55;
// var c = 40;

// a>b ? console.log('a is smaller'):(
//     b>c ? console.log('b is biggest'):console.log('a is biggest')
// );


// function age(a, b, c){
//     a<b ? console.log(`persons age ${a} is greater`):(
//         b>c ? console.log(`persons age ${b} is greater`):console.log(`persons age ${c} is greater`)
//     )
// };
// age(40, 35, 45)


// var student1 = {
//     name: "Sajid Ahmed",
//     Age: 23,
//     GPA: 4.58,
//     Subjects: "Bangla, English, Math, ICT"
// }
// console.log(student1.Age, student1.name);


// var students = {
//     name: 'Sajid Ahmed',
//     Age: 23,
//     CGPA: 3.5,
//     Subjects: 'Bangla, English, ICT'
// }
// console.log(students.Subjects, students.Age);


// class mark{
//     constructor(bangla, english, math){
//         this.total = (bangla + english + math);
//     }
// }
// console.log(new mark(67, 89, 80).total);


// class totalMilk{
//     constructor(cow, milk){
//         this.milk = milk * cow;
//     }
// }
// console.log(new totalMilk(55, 6).milk);


// class Car{
//     constructor(piece){
//         this.piece;
//         this.car;
//     }
//     bmw(piece){
//         let tyre = piece/5;
//         let look = piece/3;
//         let str = piece;

//         if(tyre<look && look<str){
//             this.car = console.log(tyre);
//         }
//         else this.car = Vi
//     }
// }


// let x = 3;

// function namta(x){
//     for (let a=1; a<=10; a++){
//         console.log(`${x}*${a} = ${x*a}`);
//     }
// }
// namta(3);



// const cloathing = ['shoe', 'pant', 'shirt', 'sunglass', 'socks',];
// // console.log(cloathing.length);
// console.log(cloathing.at(3));

// const array1=[1, 2, 3, 4, 5]
// const array2=[6, 7, 8, 9, 10]
// const array3=array1.concat(array2);
// console.log(array3);


// let pollobRoll = (underTen) => underTen <=10;

// let array1 = [1, 2, 3, 4, 6, 9, 10];

// console.log(array1.every(pollobRoll));


// let array1 = [1, 2, 3, 4 , 6, 8, 9];
// console.log(array1.fill(3, 4, 9));



// let words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// let result = words.filter((word) => word.length < 6);
// console.log(result);


// let array1 = [1, 34, 58, 97, 157];
// let result = array1.find(element => element >50);
// console.log(result);


// let array1 = [1,2,3,4,5,6,7,8,9,10];

// let map1 = array1.map((x) =>
// {
//     if(x%2==0){
//         console.log(`${x} is an even number`);
//     }
//     else console.log(`${x} is an odd`)
// }
// )



// let array1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// let map1 = array1.map((x) =>
//     {
//         if (x%2==0){
//             console.log(`${x} is an even`)
//         }
//         else console.log(`${x} is an odd`)
//     }
// )



// let names = ['makarim', 'tomal', 'pollob', 'sajid', 'sabbir', 'shovon', 'sumiya', 'sojib', 'jahid', 'sakhawat'];

// console.log(names.slice(-6));

// names.push(names.slice(0,3));
// console.log(names.flat());

// names2 = names.shift();
// console.log(names2);



// let letter = prompt("Enter a letter: ");
// letter = letter.toLowerCase();
// if (letter == "a" || letter == "e")
// console.log("Vowel");

// else console.log("Consonant");



// let letter = prompt("Enter a letter: ");
// letter = letter.toLowerCase();
// switch(letter){
//     case "a": console.log("Vowel"); break;
//     case "e": console.log("Vowel"); break;
//     case "i": console.log("Vowel"); break;
//     case "o": console.log("Vowel"); break;
//     case "u": console.log("Vowel"); break;
//     default: console.log(`${letter} is a consonant`);
// }


// let x = 1;
// sum = 0;
// while(x <= 50){
//     sum = sum+x
//     x++;
// }
// console.log(sum);

// let sum = 0;
// for(let x = 1; x <= 100; x++);{
//     if(x%3==0 && x%5==0){
//        let sum = sum + i;
//     }
//     console.log(sum);
// }


// let a = 1;
// do{
// document.write(""+1);
// a++;
// }while(a=>10);


// for (let x = 1; x =>100; x+2){

//     console.log(" " +x);

//     if (x == 40){
//         break;
//     }
// }



// let abc = 3;
// let result = abc > 2 ? console.log("abc is greater than 2") : abc < 4 ? console.log("abc is less than 4") : console.log("abc is equal to");



// let a = 4;
// let b = 6;
// let c = 9;

// let big = a>b && a>c ? a : b>a && b>c ? b : c;
// console.log(big);


// function sun(alo){
//     let moon  = alo * alo;
//     console.log(moon);
// }
// sun(200);


// function sum(a,b){
//     let result = a + b;
//     console.log("sum = "+result + "</br>");
// }
// function sub(a,b){
//     let result = a + b;
//     console.log("sub = "+result + "</br>");
// }
// function multi(a,b){
//     let result = a + b;
//     console.log("multi = "+result + "</br>");
// }
// function vida(a,b){
//     let result = a + b;
//     console.log("diva = "+result + "</br>");
// }


// sum(30,72);
// sub(40.27);
// multi(4,8);
// diva(40,6);



// Exam start from here






/*

let sub1mark = 44;
let sub2mark = 55;
let sub3mark = 66;
let sub4mark = 77;
let sub5mark = 88;

if (sub1mark >= 40 && sub2mark >= 40 && sub3mark >= 40 && sub4mark >= 40 && sub5mark >= 40){
    console.log("You are Pass");
}
else console.log("You are Fail");

// for me

const sajidAhmed = class {
    constructor(Name, Mark, Hobby) {
      this.Name = Name;
      this.Mark = Mark;
      this.Hobby = Hobby;
    }
    details() {
      return this.Name + this.Mark + this.Hobby;
    }
  };
  console.log(new sajidAhmed("Sajid", 99, "Coding").details());


// for kalam

  const kalam = class {
    constructor(Name, Mark, Hobby) {
      this.Name = Name;
      this.Mark = Mark;
      this.Hobby = Hobby;
    }
    details() {
      return this.Name + this.Mark + this.Hobby;
    }
  };
  console.log(new sajidAhmed("Kalam", 95, "Football").details());


  let mark = 60;
  let sub = 5;
  let total = mark * sub;
  
  for (let x = 1; x <= 30; x++){
    let result =total * x;
    console.log(result);
  }
  */


//   let array1 = [2,3,5,7,9];

//   let intValue = 1;
//   let multi = array1.reduce((accumulator, currentValue) => accumulator * currentValue, intValue,);
//   console.log(multi);

//   let array2 = [2,3,5,7,9,13];
//   let int = 1;
//   let sum = array2.reduce((a,b) =>a + b, int);
//   console.log(sum);



// let A = [50, 107, "jack", 83, "killer", "son", true]

// // No. 1 Answer
// let striFilter = A.filter(arrayFilter => typeof arrayFilter === "string");
// console.log(striFilter);

// // No. 2 Answer
// let numFilter = A.filter(arrayFilter => typeof arrayFilter === "number");
// console.log(numFilter);

// // No. 3 Answer
// let reversed = striFilter.reverse();
// console.log('reversed:', reversed);

// // No. 4 Answer

let sajid = {
  name: "Sajid Ahmed",
  roll: 135,
  result: {
    bangla: 87,
    english: 66,
    math: 88,
    GK: 95,
    ICT: 100,
  }
}

let total = sajid.result.bangla + sajid.result.english + sajid.result.math + sajid.result.GK + sajid.result.ICT;
console.log(total);

const me = {
  Name: sajid.name,
  Roll: sajid.roll,
  Result: total,
};

console.log(me);

