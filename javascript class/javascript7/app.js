// alert('welcome');
// const  names=['app','web','desktop'];
// console.log(names);
// const student_List= ['john','may'];
// if(student_List.includes('may')){
//     console.log('you are right');
// } else {
//     console.log('you are wrong')
// };

// const listITEM = ['tesla v1','tesla v2','toyota','camry toyota'];

// document.getElementById('btn').addEventListener('click',()=>{
//     console.log('clicked')
//     const inputName = document.getElementById('myname').value;
//     if ( inputName === listITEM[0] || inputName === listITEM[1]){
//         console.log('found car type');
//         document.getElementById('result').textContent='found car type'

//     }else {
//         console.log('no car type found by this name')
//         document.getElementById('result').textContent='not car found'
//     }
// })

// const personInfo={
//     name:'shola',
//     lastName:'oyekan',
//     home:'airbnb',
//     age:12,
//     level:'level 19',
//     hobbies:['watching','reading','coding'],
//     sayName: function(){.
//         return 'hello'

//     },
//     joinName: function(){
//         return this.name +' '+this.lastName;
//     }
// }
// console.log( personInfo.joinName());
// const person ={
//     name:"mayowa",
//     age:43,
//     level: "1 post",
//     makeFunction:function(){
//         return this.level;
//     }
// }
// document.getElementById().textContent="";

// multiple objects in an array
// const personInfod=[
//     {id:1, name:"Sola",age:12},
//     {id:2, name:"elizabeth",age:12},
//     {id:3, name:"bernard",age:12},
//     {id:4, name:"desola",age:12}
// ]
// console.log(personInfod[0].name)


// function perform(){
//     const personInfod=[
//         {id:1, name:"Sola",age:12},
//         {id:2, name:"elizabeth",age:12},
//         {id:3, name:"bernard",age:12},
//         {id:4, name:"desola",age:12}
//     ]
//     return personInfod[1].name
// }
// // console.log(perform());
// // destructuring of array and spread operator
// const laptop=['dell','apple','hp','msi','alienware'];
// const [itemOne,itemTwo,itemThree]=laptop
// console.log(itemThree);

// function laptopType(){
//     const laptop=['dell','apple','hp','msi','alienware'];
// const [itemOne,itemTwo,itemThree]=laptop
// return itemThree;

// }
// console.log(laptopType())
// rest pattern
// const[itemOne,itemTwo,...otherItem]=laptop
// console.log(...otherItem);
// skipping items
// const[itemOne, ,...all]=laptop
// console.log(...all);
// const musicPlayer={
//     play:function(id){
//         return (`playing song with id: ${id}`);
//     },
//     pause:function(id){
//         return ('paused song with id:'+id)
//     }
// }
// console.log(musicPlayer.play(30));
// console.log(musicPlayer.pause(45));
// musicPlayer.remove=function(id){
//     return ('remove song with id:'+id)

// }
// console.log(musicPlayer.remove(30))
// iif else(strict  n not operators)
// const score= '100'
// if (score===100){
//     console.log('true')
// }
// else{
//     console.log('false')
// }
let i=0
while(i<3){
    console.log(`number: ${i}`)
    i++
}