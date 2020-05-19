// /**
//  * Control Structure: If
//  **/
//
// if(){
//
// };
//
// if(){
//
// }else{
//
// }
//
// if(){
//
// }else if(){
//
// }
//
//// /**
////  * Control Structure: switch
////  **/
//
//  switch(expression){
//      case lable1:
//         console.log();
//         break;
//      case lable2:
//         console.log();
//         break;
//      default:
//         console.log();
//         break;
////  }
//
// /**
// * Control Structure: try catch
// **/ 
//
// var test = function(){
//    try{
//        console.log('enter try');
//        throw new Error('wrong name!');
//    } catch(error){
//        console.log('enter catch');
//        console.log(error);
//        return 'catch return';
//    }finally{
//        console.log('enter finally');
//        return 'finally return';       // test function will return this value
//    }
// };

// console.log(test());







// // LOOP
// let array = [9, 4, 3, 2, 1];
// for (let index = 0; index < array.length; index++){
//     let element = array[index];
//     console.log(element);
// }

// while(condition){

// }

// do{
    
// }while(condition)

// forEach() {
//     for (let index = 0; index < array.length; index++){
//         let element = array[index];
//         console.log(element);
//     }
// }

// function(){

// }
// () => {}

// let result = array.forEach((val, idx, arr) => {
//     console.log(val);
//     console.log(idx);
//     console.log(arr);
// });

// var obj = [10,20];
// for(let key in obj){
//     console.log(key);
// }
// // -> 0
// // -> 1


// var obj2 = [10,20];
// for(let value of obj2){
//     console.log(value);
// }

// -> 10
// -> 20

// // let myres = obj.forEach((i) => {
// //     console.log(i);
// // });

// array.forEach(v => console.log(v));

// Object.values(obj).forEach(value => console.log(value));

// map to new array

// let array = [9, 4, 3, 2, 1];
// let mysqr = array.map(v => v*v);
// console.log(mysqr);

// object -> html
// let items = [
//     {name: "user1",
//     image: "dog.png",
//     bio: "bark"},

//     {name: "user2",
//     image: "cat.png",
//     bio: "miao"}]

// let htmlArray = items.map((user) => {
//     return `<h1>${user.name}</h1><img src="${user.image}" /><p>${user.bio}</p>` // tab key
// });
// console.log(htmlArray);


// let sum = [1,2,3,4,5].reduce((sum, curVal) => {return sum + curVal});
// console.log(sum);


// let htmlString = items.reduce((htmlString, user) => {
//     return htmlString+`<h1>${user.name}</h1><img src="${user.image}" /><p>${user.bio}</p>` // tab key
// }," "); // htmlString start from " "
// console.log(htmlString);

let l = [1, 2, 3, 4, 5, 7, 8, 9];
// let odd = l.filter((val) => val % 2 != 0);
// console.log(odd);
// let even = l.filter((val) => val % 2 ==0);
// console.log(even);

// let m = l.find((v) => v == 3);
// console.log(m);

// shallow copy
// let l = [1, 2, 3, 4, 5, 7, 8, 9];
// let xlh = l.slice(2, 5);
// console.log(xlh);    // [3, 4, 5 ]
// console.log(xlh[2]); // 5
// console.log(l);      // [1, 2, 3, 4, 5, 7, 8, 9]
// console.log(l[2]);   // 3






// // Function

// (1)regular function decoration
// function nameOfFunction(p1, p2){
//     return p1*p2;
// };
// console.log(nameOfFunction(9,8));

// // (2) function expression
// var functionExpression = function(){
// };

// // (3)
// var arrowFunction = () => {
//     console.log('Here is function3');
//     return 'end';
// }
// console.log(arrowFunction());


// // (4)jQuery
// (()=>{console.log('function4')})();

 

// var person = {
//     getID: function(gender){
//         return gender + ", " + this.id;
//     }
// };
// let p1 = {name: "ivy", id: 10};
// let p2 = {name: "Fan", id: 20};

// let showID1 = person.getID.apply(p1, ["female"]); // apply, input [] 
// let showID2 = person.getID.call(p2, "male");  // call, input " " 
// console.log(showID1);
// console.log(showID2);


// out have no access to z
// function outer(){
//     var x = 12;
//     console.log(x);
//     return function inner(){
//         var y = 6;
//         console.log(y);
//         return function inner2(){
//             var z = 3;
//             console.log(z);
//         }
//     }
// }
// let f = outer();
// let ff = f();
// let fff = ff();

// function sign to a person variable

// let Person = function(name, age, ssn){
//     this.name = name;
//     this.age = age;
//     this.ssn = ssn;
//     this.printInfo = function(){
//         console.log(
//             "Name: " + this.name + " Age: " + this.age + " SSN: " + this.ssn);
//     }
// };

// let t = new Person("Coco", 10, 123);
// let r = new Person("Rick", 66, 234);
// console.log(t);
// console.log(r);
// /**
//  * Person { name: 'Coco', age: 10, ssn: 123, printInfo: [Function] }
//  * Person { name: 'Rick', age: 66, ssn: 234, printInfo: [Function] }
//  */

// // obeject sign to a person variable
// let Person = {
//     name: "tony",
//     age: 18,
//     ssn: 123456,
//     printInfo: function(){
//         console.log("Name: " + this.name + " Age: " + this.age + " SSN: " + this.ssn);
//     }
// };

// // Access to object way
// console.log(Person);
// /**
// {
//   name: 'tony',
//   age: 18,
//   ssn: 123456,
//   printInfo: [Function: printInfo]
// }
//  */
// console.log(person.ssn); // dot notation

// let ssnProp = 'ssn';
// console.log(person[ssnProp]); // bracket notation
// /**
//  * 123456
//  */

// person.printInfo();
// /**
//  * Name: tony Age: 18 SSN: 123456
//  */

 // Getter
//  let Person = function(name, age, ssn){
//     this.name = name;
//     this.age = age;
//     this.ssn = ssn;
//     this.printInfo = function(){
//         console.log(
//             "Name: " + this.name + " Age: " + this.age + " SSN: " + this.ssn);
//     }
// };

// let t = new Person("Coco", 10, 123);
// let r = new Person("Rick", 66, 234);

//  Person.prototype.getSSN= function(){
//      return this.ssn;
//     }
//  console.log(t.getSSN()); // 123

//  // Inhert

//  Person.prototype.shoolYear = 2020; // add attributes

//  let Student = function(name, age, ssn, school, major){
//      Person.call(this, name, age, ssn);
//      this.school = school;
//      this.major = major;

//  };

//  Student.prototype = Object.create(Person.prototype);
//  Student.prototype.constructor = Student;

//  let Employee = function(name, age, ssn, title, dept){
//     Person.call(this, name, age, ssn);
//     this.title = title;
//     this.dept = dept;
//  };
//  Employee.prototype = Object.create(Person.prototype);
//  Employee.prototype.constructor = Employee;

//  let s = new Student("peter", 30, 9999, "SFSU", "CS" );
//  console.log(s);
//  let e = new Employee("James", 60, 12343, "Lecturer", "Art");
//  console.log(e);
//  console.log(e.hasOwnProperty("name")); // true
//  console.log(e.hasOwnProperty("height")); // false
//  console.log(e.shoolYear);
//  console.log(e.hasOwnProperty("shoolYear")); // false

// //  Student {
// //     name: 'peter',
// //     age: 30,
// //     ssn: 9999,
// //     printInfo: [Function],
// //     school: 'SFSU',
// //     major: 'CS'
// //   }
// //   Employee {
// //     name: 'James',
// //     age: 60,
// //     ssn: 12343,
// //     printInfo: [Function],
// //     title: 'Lecturer',
// //     dept: 'Art'
// //   }





//  // Class
//  class Person {
//      constructor(name, age, ssn) {
//          this.name = name;
//          this.age = age;
//          this.ssn = ssn;
//          this.printInfo = function(){
//              console.log(
//                 "Name: " + this.name + " Age: " + this.age + " SSN: " + this.ssn
//              );
//          }
//      }
//      getSSN(){
//          this.test = 5
//          return this.ssn + test;
//      };
//      getName(){
//          return this.name;
//      };
//  }

// let peter = new Person("peter", 18, "4rfv");
// console.log(peter);


// class Student extends Person{
//     constructor(name, age, ssn) {
//         supper(this, name, age, ssn);
//         this.school = school;
//         this.major = major;
//     }
//     getSSN(){
//         return this.ssn;
//     };
//     getName(){
//         return this.name;
//     }
// }

// //  Sync code, lock and wait for other code finished
// function doWork(){
//     console.log('i am working');
// }

// function doStep(){
//     doWork();
//     console.log('done!');
// }

// console.log('starting to do work');
// doStep();



// function anotherFunction(){
//     console.log('another function');
//     console.log(result); // error
// }

// function timer(){

//     console.log('Before setTimeout is called');
//     setTimeout(() =>{
//         console.log("Timeout has expired");
//         var result = 6;
//     }, 15000); // print Timeout has expired, then wait 15s

//     console.log("After setTimeout is called"); // during the 15s, this line will run
//     console.log(result); // -> undefined
//     anotherFunction();
// }
// timer();
// console.log(result); 



// function foo() {
//   var x = 1;  
//   function bar() {
//     var y = 2;
//     console.log(x); // 1 (function `bar` closes over `x`)
//     console.log(y); // 2 (`y` is in scope)
//   }
//   bar();
//   console.log(x); // 1 (`x` is in scope)
//   //console.log(y); // error
// }

// foo();


// let randomPromise = (data) => new Promise((resolve, reject) => {
//     if(data % 2 == 0){
//         resolve(data + 'number is even');
//     }else{
//         reject(data + 'this is not what i want!')
//     }
// });

// randomPromise(56)
//     .then((data) => {
//         console.log("the first then");
//         console.log(data);
//         return randomPromise(58);
//     })
//     .then((data) => {
//         console.log("the sencond then");
//         console.log(data);
//         return randomPromise(59);
//     })

//     .then((ans3) => {
//         console.log(ans3);

//     })
//     .catch((e) => {
//         console.log("Error: " + e);
//     })


// let pa = Promise.all([randomPromise(56), randomPromise(58), randomPromise(60)])
//     .then((data) => {
//         data.forEach((element) => console.log(element)); 
//     })
//     .catch((e) => {
//         console.log(e);
//     });

    // 56number is even
    // 58number is even
    // 60number is even



// async function myfunction() {
//     try{
//         let data = await randomPromise(56);
//         console.log(data);
//         data = await randomPromise(58);
//         console.log(data);
//         data = await randomPromise(60);
//         console.log(data);
//         data = await randomPromise(61);
//     }catch(e){
//         console.log(e);
//     }
// }

// myfunction();

// 56number is even
// 58number is even
// 60number is even
// 61this is not what i want!


// function squarlist(list) {
//     function square(x){
//         return x*x;
//     }

//     for (var i = 0; i < list.length; i++){
//         list[i] =  square(list[i]);
//     }
//     return list;
// }

// console.log(squarlist([1,2,4,5,6]));
// // [ 1, 4, 16, 25, 36 ]

// function makeFunc() {
//     var name = 'Mozilla';
//     function displayName() {
//       alert(name);
//     }
//     return displayName;
//   }
  
//   var myFunc = makeFunc();
//   myFunc();



//   function leftOpera(x){
//       function rightOpera(y){
//           return x / y;
//       }
//       return rightOpera;
//   }
//   console.log(leftOpera(1)(3))



//   function sum(a, b) {
//       return a / b
//   }

//   console.log(sum(3,5));

//   let sum2 = (a, b) => a + b;
//   console.log(sum2(1,2));

//   class Person {
//       constructor(name) {
//           this.name = name
//       }

//     PrintNameArrow() {
//         return console.log('arrow: ' + this.name)
//     }

//   }

//   let person = new Person('bob')
//   person.PrintNameArrow()

// function myFunct(){
//     var x = 9;
// }

// console.log(x);


// if(1==1){
//     let x = 6;
// }
// console.log(x);

// let x = {
//     name:"tony",
//     age: 45
// }
// console.log(x.age);

// const x =5;
// x = 45;
// console.log(x);



let x = 5;
switch(x){
    case 1:
        console.log(1);
        break;
    case 5:
        console.log(2);
    case 6:
        console.log(6);
    default:
        console.log(5);
}