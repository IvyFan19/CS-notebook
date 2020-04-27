[toc]

---

references:


# Variable and Datatype
## Comments
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

## Three types of variable
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
    console.log('l is not 5??')
}

var l = 5;
```

## Data types

```javascript
 let x = 5;          // number
 x = "3ryud";        //string
 x = 9.9999;    
 x = function() {};  //function
 x = {};             //object
 x = [1, 2, 3, 4];    //array
 x = require('mysql') // moduel
```

# Conditional Function
## If
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
## Switch
```javascript
  switch(expression){
      case lable1:
         console.log();
         break;
      case lable2:
         console.log();
         break;
      default:
         console.log();
         break;
```

## Try...catch
``` javascript
 var test = function(){
    try{
        console.log('enter try');
        throw new Error('wrong name!');
    } catch(error){
        console.log('enter catch');
        console.log(error);
        return 'catch return';
    }finally{
        console.log('enter finally');
        return 'finally return';       // test function will return this value
    }
 };

console.log(test());
```
## Loop, forEach, for.in
```javascript
// (1)
array = [5, 4, 3, 2, 1];
for (let index = 0; index < array.length; index++){
    let element = array[index];
    console.log(element);
}

// (2)
while(condition){

}

// (3)
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


//(6)
let obj = {name:"ivy", age:"5"};
for(let v in obj){
    console.log(v);
}

// (7)
Object.values(obj).forEach(value => console.log(value));

```

## Map
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

## Reduce
Reduce from array to one number

```javascript
let sum = [1,2,3,4,5].reduce((sum, curVal) => {return sum + curVal});
console.log(sum);

let htmlString = items.reduce((htmlString, user) => {
    return htmlString+`<h1>${user.name}</h1><img src="${user.image}" /><p>${user.bio}</p>` // tab key
}," ");
console.log(htmlString);

```

## Filter

from original array to new array mached the boolean expression

```javascript
let l = [1, 2, 3, 4, 5, 7, 8, 9];
let odd = l.filter((val) => val % 2 != 0);
console.log(odd);
let even = l.filter((val) => val % 2 ==0);
console.log(even);
```

## Find
find the first one

```javascript
let l = [1, 2, 3, 4, 5, 7, 8, 9];
let m = l.find((v) => v == 3);
console.log(m);
```

## Slice
shallow copy

```javascript
let l = [1, 2, 3, 4, 5, 7, 8, 9];
let xlh = l.slice(2, 5);
console.log(xlh);    // [3, 4, 5 ]
console.log(xlh[2]); // 5
console.log(l);      // [1, 2, 3, 4, 5, 7, 8, 9]
console.log(l[2]);   // 3
```
# Function

## Function expression
```javascript
// (1)regular function decoration
function nameOfFunction(p1, p2){
    return p1*p2;
};
console.log(nameOfFunction(9,8));

// (2) function expression
var functionExpression = function(){
};

// (3)
var arrowFunction = () => {
    console.log('Here is function3');
    return 'end';
}
console.log(arrowFunction());


// (4)jQuery
(()=>{console.log('function4')})();
```
## Call

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







```javascript

```
```javascript

```
```javascript

```

```javascript

```