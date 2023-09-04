// const cars = ["volvo","camry","lexus","range rover","highlander","venza"]
// for(let i = 0; i < cars.length; i++) {
//     if(cars[i] === "lexus") break;
//     // console.log(cars[i]);
// }

// // console.log("---continue---");






// // function declaration

// function funcDec() {
// console.log("My first function declaration");
    
// }
// funcDec();

// // function expression

// const funcExpr = function () {
//     console.log("My first function expression");
// };

// funcExpr();

// // Arrow function

// const funcArr = () => {
//     console.log("My frist arrow function");
// };
// funcArr();

// add(2 , 5);

// function add(a, b){
//     console.log(a + b);
// }



// const sub = function(a, b){
//     console.log(b - a);
// };
// sub( 4 , 13);

// const mul = (a , b)=> {
//     console.log(a *  b);
// };
// mul(6 , 7);


// // global variable : This is declared outside block or function and it is accessible everywhere in the code.
// // Local variable : This is declared inside block or function.

// // return statement

// const years = [1991, 1987, 1996, 1999,  2001, 2004];

// const calcAge = function(birthYear){
//     return 2023 - birthYear;
// };
// // calcAge(years[0]);

// // console.log(calcAge(years[0]));

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);
// const age4 = calcAge(years[3]);
// const age5 = calcAge(years[4]);
// const age6 = calcAge(years[5]);

// console.log(age1, age2, age3,age4, age5,age6);


// const calcAge1 = function(birthYear){
//     const ages = [];
//     for( let i = 0; i< birthYear.length; i++){
//         ages.push(2023 - birthYear[i]);
//     }
//     return ages;
    
// };
// // console.log(calcAge1(years));
// const agesArr =calcAge1(years);
// console.log(agesArr);

// // object literals

// // property: value pair or key: value pair

// const info ={
//     firstName: "king",
//     lastName: "solomon",
//     birthYear: 1992,
//     calcAge: function(curYear){
//         return curYear - info.birthYear;
//     },
// };


// console.log(info.firstName, info. lastName);
// console.log(info.calcAge(2023));





// // Area of the object

// const rec = {
//     length: 20,
//     width: 10,

//     area: function(length,width) {
//         return (rec.length * rec.width);
//     },

//     perimeter: function(perimeter) {
//         return (2*(rec.length + rec.width));
//     } 
// }

// console.log(rec.area());
// console.log(rec.perimeter());

// // for(let count = 1 ; count < 11; count++){
// //     // 1,2,3,4,5,6,7,8,9,10
// //     console.log(count);
// // }

// // for(let i = 10; i >0; i--){
// //     10,9,8,7,6,5,4,3,2,1
// //     console.log(i);
// // }
// // for (let i = 10; i > 0; i --){
// //     if(i % 2 === 0) console.log("EVEN NUMBER: ", i);
// // }

// // const storeArr = [];
// // for (let count = 1; count < 11; count++){
// //     if(count % 2 === 0) storeArr.push(count);
// // }

// // console.log(storeArr);

// for (let i = 0; 1 < 10; i++) {

//     if(i % 2 ==0){
//         console.log(`${i} is even`);
//     } else{
//         console.log(`${i} is odd`);
//     }
// }

// const shoppingCart =["product 1","product 2", "product 3"];
// // console.log(shoppingCart[0]);
// // console.log(shoppingCart[1]);
// // console.log(shoppingCart[2]);

// for(let i = 0; shoppingCart.length; i++){
//     console.log(`product:${shoppingCart[i]}`);
// }


// const shoppingCart =["product 1","product 2", "product 3"];
// let i = 0;
// while(i< shoppingCart.length){
//     console.log(`product: ${shoppingCart[i]}`);
// }

// const todo = ["homework","food","project","learn js"];
// for (let i = 0; i < todo.length; i++) {
//     console.log(todo[i]); 
// }


// for each
// todo.forEach(function(assigment , index){
//     console.log(`${index} : ${assigment}`);

// })

// const shoppingCart =[
//     {id: 1, product: 'Book'},
//     {id: 2, product: 'shirt'},
//     {id: 3, product: 'album'},
// ];
// const productName = shoppingCart.map(function(shoppingCart){
//     return shoppingCart.product;
// });

// console.log(productName);


let myCar = {
    model: 'camaro',
    engine: 6.0,
    year:  1999,
    make: 'chevolet',
}

for (let key in myCar) {
    console.log(`${key} : ${myCar[key]}`);
    
}



function getClients(){
    console.log('downloading....');
    setTimeout(function(){
        console.log('complete....');
    },3000);
}

getClients();


// try {
//     getClients();
// } catch(error){
//         console.log(error);
// }finally{
//     console.log('execute always no matter what!.')
// }


// if(confirm('Are you sure....')){
//     console.log('Deleted');
// } else{
//     console.log('nothing happens');
// }


let height, width;

height = window. outerHeight;
width = window . outerWidth;

height = window.innerHeight;
width = window.innerWidth;



if(width > 1000){
    document.body.style.backgroundcolor = 'red';
    
  }else if (width > 500){
    document.body.style.backgroundcolor = 'blue';

}else {
    document.body.style.backgroundcolor = 'green';
}


console.log(height);
console.log(width);


let urlLocation = window.location;

 console.log(urlLocation.host);
 console.log(urlLocation.hostname);
 console.log(urlLocation.port);
 console.log(urlLocation);

//  scope

var a = 'a';
let b = 'b';
const c = 'c';



// function scope


function function_scope(){
    var a = 'A';
    let b = 'B';
    const c = 'C';
    console.log('FUNCTION SCOPE: ' +a,b,c);
}

function_scope();
if(true){
    var a = 'AA';
    let b = 'BB';
    const c = 'CC';
    console.log('GLOBAL' + a,b,c);
}
for(let a = 0; a < 10; a++){
    console.log(a);
}


console.log('GLOBAL' + a,b,c);




