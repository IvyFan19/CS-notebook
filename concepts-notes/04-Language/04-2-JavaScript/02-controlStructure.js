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
//
//console.log(test());







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

// let obj = {name:"ivy", age:"5"};
// for(let v in obj){
//     console.log(v);
// }

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
let items = [
    {name: "user1",
    image: "dog.png",
    bio: "bark"},

    {name: "user2",
    image: "cat.png",
    bio: "miao"}]

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
function outer(){
    var x = 12;
    console.log(x);
    return function inner(){
        var y = 6;
        console.log(y);
        return function inner2(){
            var z = 3;
            console.log(z);
        }
    }
}
let f = outer();
let ff = f();
let fff = ff();
