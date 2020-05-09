
- [2. Conditional Function](#2-conditional-function)
  - [2.1. If](#21-if)
  - [2.2. Switch](#22-switch)
  - [2.3. Try...catch](#23-trycatch)
  - [2.4. Loops and iterators](#24-loops-and-iterators)
  - [2.5. Map](#25-map)
  - [2.6. Reduce](#26-reduce)
  - [2.7. Filter](#27-filter)
  - [2.8. Find](#28-find)
  - [2.9. Slice](#29-slice)
- [3. Function](#3-function)
  - [3.1. Function expression](#31-function-expression)
  - [3.2. Nested function](#32-nested-function)
  - [3.3. Call](#33-call)
- [4. Objects](#4-objects)
  - [4.1. Function sign to variable](#41-function-sign-to-variable)
  - [4.2. Object sign to variable](#42-object-sign-to-variable)
  - [4.3. Getter](#43-getter)
  - [4.4. Traditional](#44-traditional)
  - [4.5. Classic Class](#45-classic-class)
- [5. Async and Sync code](#5-async-and-sync-code)
  - [5.1. Sync code](#51-sync-code)
  - [5.2. Promise](#52-promise)
  - [5.3. async wait](#53-async-wait)


<!-- TOC -->

- [2. Conditional Function](#2-conditional-function)
  - [2.1. If](#21-if)
  - [2.2. Switch](#22-switch)
  - [2.3. Try...catch](#23-trycatch)
  - [2.4. Loops and iterators](#24-loops-and-iterators)
  - [2.5. Map](#25-map)
  - [2.6. Reduce](#26-reduce)
  - [2.7. Filter](#27-filter)
  - [2.8. Find](#28-find)
  - [2.9. Slice](#29-slice)
- [3. Function](#3-function)
  - [3.1. Function expression](#31-function-expression)
  - [3.2. Nested function](#32-nested-function)
  - [3.3. Call](#33-call)
- [4. Objects](#4-objects)
  - [4.1. Function sign to variable](#41-function-sign-to-variable)
  - [4.2. Object sign to variable](#42-object-sign-to-variable)
  - [4.3. Getter](#43-getter)
  - [4.4. Traditional](#44-traditional)
  - [4.5. Classic Class](#45-classic-class)
- [5. Async and Sync code](#5-async-and-sync-code)
  - [5.1. Sync code](#51-sync-code)
  - [5.2. Promise](#52-promise)
  - [5.3. async wait](#53-async-wait)

<!-- /TOC -->
## 1.1. Comments
```javascript
/*
comments 1
*/

/**
 * comments 2
 */

// comments 3

/**
 * Variable: javascript is a dynamic language
 * Three variable declaration, don't have to declare variable type
 * Good: Hoisting
 */
```

## 1.2. Three types of variable
 * Variable: javascript is a dynamic language
 * Three variable declaration, don't have to declare variable type
 * Good: Hoisting

```javascript
var x = 6;   // local and global
let y = 7;   // local(eg. if-block)
const z = 9; // can't be resigned

// but const can change attribute of object.
const object = {name: "Ivy"}; 
object.name = "Bob";
console.log(object);

// Hoisting

if(l == 5){
    console.log('l is 5');
}else{
    console.log('l is not 5')
}

// scope of var
function foo() {
  var x = 1;  
  function bar() {
    var y = 2;
    console.log(x); // 1 (function `bar` closes over `x`)
    console.log(y); // 2 (`y` is in scope)
  }
  bar();
  console.log(x); // 1 (`x` is in scope)
  //console.log(y); // error
}

foo();
```

## 1.3. Data types

```javascript
 let x = 5;          // number
 x = "3ryud";        //string
 x = 9.9999;    
 x = function() {};  //function
 x = {};             //object
 x = [1, 2, 3, 4];    //array
 x = require('mysql') // moduel
```

### 1.3.1. Datatype conversion
```javascript
var text = '3.14someRandomStuff';
var pointNum = parseFloat(text);
<!--pointNum -> 3.14-->

var floatNum = parseInt(text);
<!--floatNum -> 2-->

3+'fajdfha' // numeric to string
```

## 1.4. False
Everything Without a "Value" is False

```javascript
var x = 0;
Boolean(x);       
<!--false-->

var x            // undefined
var x = -0
var x = ""
var x = null
var x = false
```
# 2. Conditional Function
## 2.1. If
```javascript
 if(){

 };

 if(){

 }else{

 }

 if(){

 }else if(){

 }
```
## 2.2. Switch
Switch statement allows a program to evaluate an expression and
 attempt to match the expression's value to a case label.
 
```javascript
  switch(expression){
      case lable1:
###          console.log();  
         break;
      case lable2:
         console.log();
         break;
      default:
         console.log();
         break;
```

## 2.3. Try...catch

try-catches come with 3 types of blocks: try, catch, finally

* if no error, then simply skip catch blocks and jump to finally block.
* "finally return" is the the block return


``` javascript
 var test = function(){
 
 // try blocks will contain statements which you attempt to execute (or try)
	    try{								
        console.log('enter try');
        throw new Error('wrong name!');
    } catch(error){
        console.log('enter catch');
        console.log(error);
        return 'catch return'; // if no error, then simply skip catch blocks and jump to finally block.
    }finally{
        console.log('enter finally');
        return 'finally return';       // test function will return this value
    }
 };

console.log(test());



<!-- enter try
enter catch
Error: wrong name!
    at test (<anonymous>:6:15)
    at <anonymous>:19:13
enter finally
finally retur -->
```
## 2.4. Loops and iterators


* for statement
* do...while statement
* while statement
* labeled statement
* break statement
* continue statement
* for...in statement
* for...of statement

```javascript
// (1) For

array = [5, 4, 3, 2, 1];
for (let index = 0; index < array.length; index++){
    let element = array[index];
    console.log(element);
}

// (2) while: A while statement executes its statements 
// as long as a specified condition evaluates to true.

while(condition){

}

// (3) do-while

do{
    
}while(condition)

// (4)
let result = array.forEach((val, idx, arr) => {
    console.log(val);
    console.log(idx);
    console.log(arr);
});

// (5)
array.forEach(v => console.log(v));


// (6) For...of

var obj2 = [10,20];
for(let value of obj2){
    console.log(value);
}
// -> 10
// -> 20


//(7) For...in: iterates enumerable properties of an object

var obj = [10,20];
for(let key in obj){
    console.log(key);
}
// -> 0
// -> 1

// (8)
Object.values(obj).forEach(value => console.log(value));

```

## 2.5. Map
Map from array to arrary

```javascript
// map to new array
let array = [9, 4, 3, 2, 1];
let mysqr = array.map(v => v*v);
console.log(mysqr);


// object -> html
let items = [
    {name: "user1",
    image: "dog.png",
    bio: "bark"},

    {name: "user2",
    image: "cat.png",
    bio: "miao"}]

let htmlArray = items.map((user) => {
    return `<h1>${user.name}</h1><img src="${user.image}" /><p>${user.bio}</p>` // tab key
});
console.log(htmlArray);

```

## 2.6. Reduce
Reduce from array to one number

```javascript
let sum = [1,2,3,4,5].reduce((sum, curVal) => {return sum + curVal});
console.log(sum);

let htmlString = items.reduce((htmlString, user) => {
    return htmlString+`<h1>${user.name}</h1><img src="${user.image}" /><p>${user.bio}</p>` // tab key
}," ");
console.log(htmlString);

```

## 2.7. Filter

from original array to new array mached the boolean expression

```javascript
let l = [1, 2, 3, 4, 5, 7, 8, 9];
let odd = l.filter((val) => val % 2 != 0);
console.log(odd);
let even = l.filter((val) => val % 2 ==0);
console.log(even);
```

## 2.8. Find
find the first one

```javascript
let l = [1, 2, 3, 4, 5, 7, 8, 9];
let m = l.find((v) => v == 3);
console.log(m);
```

## 2.9. Slice
shallow copy

```javascript
let l = [1, 2, 3, 4, 5, 7, 8, 9];
let xlh = l.slice(2, 5);
console.log(xlh);    // [3, 4, 5 ]
console.log(xlh[2]); // 5
console.log(l);      // [1, 2, 3, 4, 5, 7, 8, 9]
console.log(l[2]);   // 3
```
# 3. Function

## 3.1. Function expression
```javascript
// (1)regular function decoration
function nameOfFunction(p1, p2){
    return p1*p2;
};
console.log(nameOfFunction(9,8));

// (2) function expression
var functionExpression = function(){
};

// (3) fat error
var arrowFunction = () => {
    console.log('Here is function3');
    return 'end';
}
console.log(arrowFunction());


// (4)jQuery
(()=>{console.log('function4')})();
```

## 3.2. Nested function
```javascript
  function leftOpera(x){
      function rightOpera(y){
          return x / y;
      }
      return rightOpera;
  }
  console.log(leftOpera(1)(3))
//   0.3333333333333333
```
## 3.3. Call

```javascript
var person = {
    getID: function(gender){
        return gender + ", " + this.id;
    }
};
let p1 = {name: "ivy", id: 10};
let p2 = {name: "Fan", id: 20};

// (1)
let showID1 = person.getID.apply(p1, ["female"]); // apply, input [] 

// (2)
let showID2 = person.getID.call(p2, "male");  // call, input " " 
console.log(showID1);
console.log(showID2);
```
# 4. Objects

## 4.1. Function sign to variable

```javascript
let Person = function(name, age, ssn){
    this.name = name;
    this.age = age;
    this.ssn = ssn;
    this.printInfo = function(){
        console.log(
            "Name: " + this.name + " Age: " + this.age + " SSN: " + this.ssn);
    }
};

let t = new Person("Coco", 10, 123);
let r = new Person("Rick", 66, 234);
console.log(t);
console.log(r);
/**
 * Person { name: 'Coco', age: 10, ssn: 123, printInfo: [Function] }
 * Person { name: 'Rick', age: 66, ssn: 234, printInfo: [Function] }
 */
```
## 4.2. Object sign to variable
```javascript
let person = {
    name: "tony",
    age: 18,
    ssn: 123456,
    printInfo: function(){
        console.log("Name: " + this.name + " Age: " + this.age + " SSN: " + this.ssn);
    }
};

// Access to object way
console.log(person);
/**
{
  name: 'tony',
  age: 18,
  ssn: 123456,
  printInfo: [Function: printInfo]
}
 */
console.log(person.ssn); // dot notation

let ssnProp = 'ssn';
console.log(person[ssnProp]); // bracket notation
/**
 * 123456
 */

person.printInfo();
/**
 * Name: tony Age: 18 SSN: 123456
 */

```

## 4.3. Getter

```javascript
 let Person = function(name, age, ssn){
    this.name = name;
    this.age = age;
    this.ssn = ssn;
    this.printInfo = function(){
        console.log(
            "Name: " + this.name + " Age: " + this.age + " SSN: " + this.ssn);
    }
};

let t = new Person("Coco", 10, 123);
let r = new Person("Rick", 66, 234);

 Person.prototype.getSSN= function(){
     return this.ssn;
    }
 console.log(t.getSSN()); // 123
```

## 4.4. Traditional

```javascript
Person.prototype.shoolYear = 2020; // add attributes
 Person.prototype.getSSN= function(){
    console.log("return ssn");
     return this.ssn;
    }
 console.log(person.getSSN());


 let Student = function(name, age, ssn, school, major){
     Person.call(this, name, age, ssn);
     this.school = school;
     this.major = major;

 };

 Student.prototype = Object.create(Person.prototype);
 Student.prototype.constructor = Student;

 let Employee = function(name, age, ssn, title, dept){
    Person.call(this, name, age, ssn);
    this.title = title;
    this.dept = dept;
 };
 Employee.prototype = Object.create(Person.prototype);
 Employee.prototype.constructor = Employee;

 let s = new Student("peter", 30, 9999, "SFSU", "CS" );
 console.log(s);
 let e = new Employee("James", 60, 12343, "Lecturer", "Art");
 console.log(e);
 console.log(e.hasOwnProperty("name")); // true
 console.log(e.hasOwnProperty("height")); // false
 console.log(e.shoolYear);
 console.log(e.hasOwnProperty("shoolYear")); // false

//  Student {
//     name: 'peter',
//     age: 30,
//     ssn: 9999,
//     printInfo: [Function],
//     school: 'SFSU',
//     major: 'CS'
//   }
//   Employee {
//     name: 'James',
//     age: 60,
//     ssn: 12343,
//     printInfo: [Function],
//     title: 'Lecturer',
//     dept: 'Art'
//   }
```

## 4.5. Classic Class

```javascript
 class Person {
     constructor(name, age, ssn) {
         this.name = name;
         this.age = age;
         this.ssn = ssn;
         this.printInfo = function(){
             console.log(
                "Name: " + this.name + " Age: " + this.age + " SSN: " + this.ssn
             );
         }
     }
     getSSN(){
         this.test = 5
         return this.ssn + test;
     };
     getName(){
         return this.name;
     };
 }

let peter = new Person("peter", 18, "4rfv");
console.log(peter);


class Student extends Person{
    constructor(name, age, ssn) {
        supper(this, name, age, ssn);
        this.school = school;
        this.major = major;
    }
    getSSN(){
        return this.ssn;
    };
    getName(){
        return this.name;
    }
}

```

# 5. Async and Sync code

## 5.1. Sync code

lock and wait for other code finished

```javascript
//  Sync code, lock and wait for other code finished
function doWork(){
    console.log('i am working');
}

function doStep(){
    doWork();
    console.log('done!');
}

console.log('starting to do work');
doStep();
```

## 5.2. Promise
 The callback takes two arguments, resolve and reject, which are both functions.</br>
 If everything is successful, the promise is fulfilled by calling resolve(). </br>
 In case of an error, reject() is called with an Error object. This indicates that the promise is rejected.
 This is the example of Promises chaining

```javascript
let randomPromise = new Promise((resolve, reject) => {
    let data = Math.floor(Math.random()*100);
    console.log(data);
    if(data % 2 == 0){
        resolve('number is even');
    }else{
        reject('this is not what i want!')
    }
});

randomPromise
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log(e);
    })
    
    
    
let randomPromise = (data) => new Promise((resolve, reject) => {
    if(data % 2 == 0){
        resolve('number is even');
    }else{
        reject('this is not what i want!')
    }
});

randomPromise(56)
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log(e);
    })
    
    
    
let pa = Promise.all([randomPromise(56), randomPromise(58), randomPromise(60)])
    .then((data) => {
        data.forEach((element) => console.log(element)); 
    })

    .catch((e) => {
        console.log(e);
    });
    
    // 56number is even
    // 58number is even
    // 60number is even

```
## 5.3. async wait

```javascript
async function myfunction() {
    try{
        let data = await randomPromise(56);
        console.log(data);
        data = await randomPromise(58);
        console.log(data);
        data = await randomPromise(60);
        console.log(data);
        data = await randomPromise(61);
    }catch(e){
        console.log(e);
    }
}

myfunction();

// 56number is even
// 58number is even
// 60number is even
// 61this is not what i want!

```



```javascript

```



```javascript

```


```javascript

```