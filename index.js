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

const click_home = document.querySelector('.home a');
const click_about = document.querySelector('.about a');
const click_pf = document.querySelector('.portfolio a');
const click_why = document.querySelector('.why a');
const click_roadmap = document.querySelector('.roadmap a');
const click_contact = document.querySelector('.contact a');

const home_main = document.querySelector('.home_main');
const about_main = document.querySelector('.about_main');
const pf_main = document.querySelector('.portfolio_main');
const why_main = document.querySelector('.why_main');
const roadmap_main = document.querySelector('.roadmap_main');
const contact_main = document.querySelector('.contact_main');


click_home.addEventListener('click', ()=> {
  home_main.style.display = 'block';
  about_main.style.display = 'none';
  pf_main.style.display = 'none';
  why_main.style.display = 'none';
  roadmap_main.style.display = 'none';
  contact_main.style.display = 'none';
})
click_about.addEventListener('click', ()=> {
  home_main.style.display = 'none';
  about_main.style.display = 'block';
  pf_main.style.display = 'none';
  why_main.style.display = 'none';
  roadmap_main.style.display = 'none';
  contact_main.style.display = 'none';
})
click_pf.addEventListener('click', ()=> {
  home_main.style.display = 'none';
  about_main.style.display = 'none';
  pf_main.style.display = 'block';
  why_main.style.display = 'none';
  roadmap_main.style.display = 'none';
  contact_main.style.display = 'none';
})
click_why.addEventListener('click', ()=> {
  home_main.style.display = 'none';
  about_main.style.display = 'none';
  pf_main.style.display = 'none';
  why_main.style.display = 'block';
  roadmap_main.style.display = 'none';
  contact_main.style.display = 'none';
})
click_roadmap.addEventListener('click', ()=> {
  home_main.style.display = 'none';
  about_main.style.display = 'none';
  pf_main.style.display = 'none';
  why_main.style.display = 'none';
  roadmap_main.style.display = 'block';
  contact_main.style.display = 'none';
})
click_contact.addEventListener('click', ()=> {
  home_main.style.display = 'none';
  about_main.style.display = 'none';
  pf_main.style.display = 'none';
  why_main.style.display = 'none';
  roadmap_main.style.display = 'none';
  contact_main.style.display = 'block';
})

// Submit event

const submit_msg = document.querySelector(".submit_msg");

document.getElementById("submit_btn").addEventListener('submit', (e) => {
  e.preventDefault();

  // submit_msg.innerHTML = `Thank you for submitting your query. I will get back to you shortly.`
});



// connecting video

const video_list = document.querySelectorAll('.video_nav img');

function getvideoUrl(url) {
  document.getElementById('video_carousel').src = url;
}

video_list[0].addEventListener('click', () => {
  getvideoUrl('video/coordinates.mp4');
});
video_list[1].addEventListener('click', () => {
  getvideoUrl('video/carrot_game.mp4');
});
video_list[2].addEventListener('click', () => {
  getvideoUrl('video/shopping_list.mp4');
});

