
// ternary operator
// function and its type
// array
// object
// loop


// ternary operator
// (condition)? " ": " ";

// const getAge = +prompt("Enter your age...");
// const check = getAge >=18 ? "drink beer" : "drink water";
// console.log(check);
// getAge >= 18 ? console.log("drink beer") : console.log("drink water");
// let str = `you're two $(getAge >=18 ? "old" : "young").`;
// console.log(str);

// // array

// const arr = ["sade" , 5.3, null, NaN, {}, [], function () {}, true];
// // array indexes are zero based

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);

// // array length
// console.log(arr.length);
// // to get the last index of an array: arr.length - 1.
// console.log(arr[arr.lenght - 1]);

// // methods of array
// const fruits = ["banana", "apple", "orange"];
// // 1. unshift, 2. push, 3. shift, 4. pop, 5. typeof, 6. includes

// // add elements into array: either as the first index or last index
// // unshift
// fruits.unshift("lemonade");
// // push
// fruits.push("strawberry");
// fruits.push("mango");
// console.log(fruits);

// // remove elements from array: either from the first or last index.
// // shift
// fruits.shift();

// // // pop
// // fruits.pop();
// // console.log(fruits);

// // // typeof : get the datatype of a value or element in an array.
// // console.log(typeof arr[0]);
// // console.log(typeof arr[1]);
// // console.log(typeof arr[2]);
// // console.log(typeof arr[3]);
// // console.log(typeof arr[4]);
// // console.log(typeof arr[5]);
// // console.log(typeof arr[6]);
// // console.log(typeof arr[7]);

// // // includes: true or false
// // console.log(fruits.includes("banana"));
// // if(fruits.includes("pawpaw")) {
// //     console.log("pawpaw is included");
// // } else{
// //     fruits.push("pawpaw");
// //     console.log(fruits);
// // }

// // // loop: for loop
// // // initializer, condition, increment/decrement

// // for (let index = 0; index < array.length; count++) {
    
// }






const today = new Date();
console.log(today);
let output;
let birthday = new Date('january 5 1987');
birthday = new Date('1-5-1987');
output = birthday
console.log(output)

// if operator
const learningJavaScript = false;
    if (learningJavaScript) {
        console.log('Great!')
    } else{
        console.log('so bad, javascript is great!!!.')
    }


    const score = 100;
//     if (score == 100) {
//         console.log('yes, is the same.');
        
//     } else {
//         console.log('NO, is not the same.');
//     }

//     // not equal
// if (score != 100) {
//     console.log('yes, it is different');
    
// } else {
//     console.log('no, it is not different');
// }

//strict comparison operator 

if (score !== '100') {
    console.log('yes, they\'re the same.');
    
} else{
    console.log('no, they\'re different')
}

let product;
if ( product ) {
    console.log(`yes, and the score is ${product}`);
} else{
    console.log('no score....')
}

let cash = 500;
let cartTotal = 300;
if (cash <= cartTotal) {
    console.log('successful payment...');
    
} else {
    console.log('unsuccessful payment...');
}


let currentTime = 10;
if(currentTime > 0 && currentTime <=12){
    console.log('GOOD MORNING');
} else if (currentTime > 12 && currentTime <=18){
    console.log('GOOD AFTERNOON');
} else if (currentTime > 18 && currentTime <=24){
    console.log('GOOD NIGHT');
} else{
    console.log('INVALID TIME');
}

let money = 500;
    credit = 500;
    cartTotal = 600;
    avaliable = cash + credit;
    if(cartTotal< money || cartTotal <credit) {
        console.log('you can pay with cash or credit card');
    } else if(avaliable >= cartTotal){
        console.log('pay with both');
    }
    
    else{
        console.log('insufficient Funds');
    }

    // ternary operator
     const loggedin = true;
     console.log(loggedin === true ? 'The user is logged in': 'Not logged in, please log in');




    //  switch statement
     

        const paymentMethod ='check';
     switch (paymentMethod) {
        case 'cash':console.log(`your payment method is: ${paymentMethod}`);
        
            
            break;
        case 'check': console.log(`your payment method is: ${paymentMethod} we will verify the funds...`);


            
            break;
        case 'card': console.log(`your payment method is: ${paymentMethod} processing.....`);

            
            break;
     
        default:console.log('please select a valid  payment method');
            break;
     }

     const cars = ['camaro','mustang', 'chevolet'];

     const selected = 0;
     let car;
     switch (selected) {
        case 0:
            car = cars[0];
            break;
        case 1:
            car = cars[1];
            break;
        case 2:
            car = cars[2];
            break;
     }
     console.log(`your selected car is ${car}`);



    //  loop
    for (let i = 0; i < 10; i++) {
        console.log(`Number: ${i}`);
    }


      