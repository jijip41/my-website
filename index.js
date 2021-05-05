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
const click_pf = document.querySelector('.requirement a');
const click_why = document.querySelector('.why a');
const click_roadmap = document.querySelector('.roadmap a');
const click_contact = document.querySelector('.contact a');

const home_main = document.querySelector('.home_main');
const about_main = document.querySelector('.about_main');
const pf_main = document.querySelector('.requirement_main');
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
  getvideoUrl('media/carrot_game.mp4');
});
video_list[1].addEventListener('click', () => {
  getvideoUrl('media/shopping_list.mp4');
});
video_list[2].addEventListener('click', () => {
  getvideoUrl('media/coordinates.mp4');
});


// "About me" section click & get text

const img_seoul = document.querySelector(".about_img li:nth-child(1)");
const img_six = document.querySelector(".about_img li:nth-child(2)");
const img_food = document.querySelector(".about_img li:nth-child(3)");
const img_cat = document.querySelector(".about_img li:nth-child(4)");

const about_txt_container = document.querySelector(".about_text_container");

const seoul = `I was born and raised in South Korea. I was a teacher in my home city of Incheon. While teaching I met my future husband who was working as the only foreign teacher in the school. As he sometimes struggled to understand Korean curture and couldn't find ingredients at the supermarket, I helped him a lot and we became close.<br>After several years together we decided to move to England. So here I am now...`;

const six = `I came to the UK 6 years ago. I had only visited here on holiday a few times so it was a big step for me to relocate and leave my family and friends behind.<br> When I arrived in England, I began to work as a florist, creating floral arrangements for individuals and events.<br> From there I moved to office-based work, researching and creating reports for Korean SMEs to expand their horizons. This has led me to where I am today, creating web applications with aim of helping others to achieve their digital goals while developing my skillset.`;

const study = `I studied Home Economics Education at university in Seoul. I had decided to learn HEE because when I was little, everyone told me that being a teacher is good for girls as we can look after family better while we have stable jobs. In addition, I really liked my home economics teacher. She was my role model becuase I thought she was fashionable and looked very cool. <br>
Looking back now I realised that my world was so limited. At that time in Korea, girls were mainly taught home economics but not so much technology or computer science. I graduated girl's middle/high school and I wasn't given options to select computer science in the school's curriculum. I only learned computer science 1 hour a week and only in the 1st grade of middle school while students at the boy's school were learning technology and computer science 3-4 hours a week. <br>
Now I think I could have had different career path if I was given choices like the boys. Becuase I made my decsion to learn HEE without hesitation despite being offered a place studying civil engineering at a different universitiy.`

const yoga = `When I have some spare time I like doing yoga. As I spend a lot of time sitting to do coding and do my work, I realised that I need to keep balance of my body and proper exercise. I love doing yoga becuase I enjoy the time I can put every thoughts and worries away while I do it. It also keeps my body fit!<br>
During lockdown, I found lots of good yoga tutorials on Youtube and follow them regulary and it has been really good. But I can't wait to join a yoga class in a studio!`;

img_seoul.addEventListener('click', () => {
  getTxt(seoul);
})
img_six.addEventListener('click', () => {
  getTxt(six);
})
img_food.addEventListener('click', () => {
  getTxt(study);
})
img_cat.addEventListener('click', () => {
  getTxt(yoga);
})

function getTxt(title) {
  about_txt_container.innerHTML = title;
}


// requirements button event

const fccReqBtn = document.querySelector(".fcc_title");
const codeWarsReqBtn = document.querySelector(".codewars_title");
const gitHubReqBtn = document.querySelector(".github_title");


fccReqBtn.addEventListener('click', (e) => {
  setTimeout(() => {document.querySelector(".fcc_arrow_down1").classList.add('arrow_visible')}, 500);
  setTimeout(() => {document.querySelector(".fcc_arrow_down2").classList.add('arrow_visible')}, 1200);
  setTimeout(() => {document.querySelector(".fcc_arrow_down3").classList.add('arrow_visible')}, 1900);

  setTimeout(() => {document.querySelector(".fcc_done").classList.add('done_visible')}, 3000);

  setTimeout(() => {document.querySelector(".fcc_req_a").classList.add('a_visible')}, 3400);

});

codeWarsReqBtn.addEventListener('click', (e) => {
  setTimeout(() => {document.querySelector(".codewars_arrow_down1").classList.add('arrow_visible')}, 500);
  setTimeout(() => {document.querySelector(".codewars_arrow_down2").classList.add('arrow_visible')}, 1200);
  setTimeout(() => {document.querySelector(".codewars_arrow_down3").classList.add('arrow_visible')}, 1900);

  setTimeout(() => {document.querySelector(".codewars_done").classList.add('done_visible')}, 3000);

  setTimeout(() => {document.querySelector(".codewars_req_a").classList.add('a_visible')}, 3400);
});

gitHubReqBtn.addEventListener('click', (e) => {
  setTimeout(() => {document.querySelector(".github_arrow_down1").classList.add('arrow_visible')}, 500);
  setTimeout(() => {document.querySelector(".github_arrow_down2").classList.add('arrow_visible')}, 1200);
  setTimeout(() => {document.querySelector(".github_arrow_down3").classList.add('arrow_visible')}, 1900);

  setTimeout(() => {document.querySelector(".github_done").classList.add('done_visible')}, 3000);

  setTimeout(() => {document.querySelector(".github_req_a").classList.add('a_visible')}, 3400);
});




// why fac

const whyFac = document.querySelector('.why_main');
const getSize = document.querySelector(".home_main").getBoundingClientRect();
const flowerSize = 170;

document.addEventListener('click', loadFlowers())
;

function loadFlowers() {
  start('flower', 7, 'media/flower.png');
}

console.log(getSize);
function start(className, count, imgPath) {
  const left = getSize.x;
  const top = getSize.y;
  const width = getSize.width - flowerSize;
  const height = getSize.height - flowerSize;

  for(let i = 0; i < count; i++) {

    const flowerX = getRandomNum(left, width);
    const flowerY = getRandomNum(top, height);

    const createImg = document.createElement('img');
    createImg.setAttribute('class', className);
    createImg.setAttribute('src', imgPath);
    createImg.setAttribute('display', 'block');
    
    createImg.setAttribute('style', `left:${flowerX}px; top:${flowerY}px`);
    
    whyFac.appendChild(createImg);
  }

}

function getRandomNum(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);

}


