const text = ["developer", "teacher", "leader", "painist"];

const profession = document.querySelector(".type");
const cursor = document.querySelector(".cursor");
let textIndex = 0;
let charIndex = 0;

let typingSpeed = 200;
let erasingSpeed = 150;
let textDelay = 1200;


const typeWriter = ()=> {
    if(!cursor.classList.contains("typing")) {
        cursor.classList.add("typing");

    }
    if(charIndex < text[textIndex].length){
        profession.textContent += text[textIndex].charAt(charIndex);
        charIndex++;

        setTimeout(typeWriter , typingSpeed);
    } else{
        cursor.classList.remove("typing");
        setTimeout(erase , textDelay);
    }

};
function erase(){
    if(!cursor.classList.contains("typing")){
        cursor.classList.add("typing");
    }
    if(charIndex >= 0){
        profession.textContent = text[textIndex].slice(0, charIndex);
        charIndex--;
        setTimeout(erase, erasingSpeed);

    }else {
        cursor.classList.remove("typing");
        textIndex++;
        if(textIndex >= text.length)textIndex = 0;
        setTimeout(typeWriter, textDelay);

    }
}

// typeWriter();
document.addEventListener("DOMContentLoaded",function(){
    setTimeout(typeWriter,textDelay);
});
// window.addEventListener("load", typeWriter);


// const ul = document.querySelector("ul");
// const btn = document.querySelector("button");
// btn.addEventListener('click', function(e) {
// if(!ul.classList.contains("Hide")){
//     ul.classList.add("Hide")
//     e.target.textContent = "show";


// }else { ul.classList.add("Hide")
// e.target.textContent = "Hide";

// }
// });
