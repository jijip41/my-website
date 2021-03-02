'use strict'

const greeting_message = "Hello there I'm Jihye I'm looking for a developer job!";

const greeting_message_container = document.querySelector('.greeting-message');


let type_message = '';
let strArr = greeting_message.toUpperCase().split('').map(elem => elem == " " ? "_" : elem);
let i = 0;

function typing() {

  if(i < strArr.length) {
    greeting_message_container.innerHTML += `${strArr[i]}`;
    i++;
    setTimeout(typing, 70);
  }
  
}

typing();
