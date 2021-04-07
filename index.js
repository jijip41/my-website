'use strict'

// typing function

const greeting_message = "Hello there I'm Jihye I'm looking for a developer job!";
const greeting_message_container = document.querySelector('.greeting-message');

let i = 0;
let strArr = greeting_message.toUpperCase().split('').map(elem => elem == " " ? "_" : elem); //HELLO_
let emptyStr = '';

let forward = true;


function typing() {

  if(forward) {
    emptyStr += strArr[i];
    greeting_message_container.innerHTML = emptyStr;
    i++;
    if(i < strArr.length) {
      setTimeout(typing, 80);
    } else {
      forward = false;
      setTimeout(typing, 80);
    }
  } else {
    emptyStr = emptyStr.slice(0, -1);
    greeting_message_container.innerHTML = emptyStr;
    i--;
    if(i > 0) {
      setTimeout(typing, 80);
    } else if (i === 0) {
      greeting_message_container.innerHTML = '&nbsp;';
      forward = true;
      setTimeout(typing, 80);
    }
}


}


typing();


// toggle button control

const btn = document.querySelector(".bar");
const nav = document.querySelector(".nav_container");

btn.addEventListener('click', () => {
  nav.classList.toggle("nav_active");
})



// changing main


const click_about = document.querySelector('.about a');
const click_pf = document.querySelector('.portfolio a');
const click_why = document.querySelector('.why a');
const click_roadmap = document.querySelector('.roadmap a');
const click_contact = document.querySelector('.contact a');

const about_main = document.querySelector('.about_main')
const pf_main = document.querySelector('.portfolio_main')
const why_main = document.querySelector('.why_main')
const roadmap_main = document.querySelector('.roadmap_main')
const contact_main = document.querySelector('.contact_main')


click_about.addEventListener('click', ()=> {
  about_main.style.display = 'block';
  pf_main.style.display = 'none';
  why_main.style.display = 'none';
  roadmap_main.style.display = 'none';
  contact_main.style.display = 'none';
})
click_pf.addEventListener('click', ()=> {
  about_main.style.display = 'none';
  pf_main.style.display = 'block';
  why_main.style.display = 'none';
  roadmap_main.style.display = 'none';
  contact_main.style.display = 'none';
})
click_why.addEventListener('click', ()=> {
  about_main.style.display = 'none';
  pf_main.style.display = 'none';
  why_main.style.display = 'block';
  roadmap_main.style.display = 'none';
  contact_main.style.display = 'none';
})
click_roadmap.addEventListener('click', ()=> {
  about_main.style.display = 'none';
  pf_main.style.display = 'none';
  why_main.style.display = 'none';
  roadmap_main.style.display = 'block';
  contact_main.style.display = 'none';
})
click_contact.addEventListener('click', ()=> {
  about_main.style.display = 'none';
  pf_main.style.display = 'none';
  why_main.style.display = 'none';
  roadmap_main.style.display = 'none';
  contact_main.style.display = 'block';
})

// Submit event

const contact_sections = document.querySelector('.contact_sections')
document.getElementById("submit_btn").addEventListener('click', () => {
  contact_sections.innerHTML = `thank you for submitting your query. I will get back to you shortly`;
});