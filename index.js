'use strict'

// typing function

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


// toggle button control

const btn = document.querySelector(".bar");
const nav = document.querySelector(".nav_container");

btn.addEventListener('click', () => {
  nav.classList.toggle("nav_active");
})