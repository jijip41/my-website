'use strict'

// typing function

const greeting_message = "Hello there I'm Jihye I'm looking for a developer job!";
const greeting_message_container = document.querySelector('.greeting-message');
const greeting_btn = document.querySelector(".greeting_button"); // greeting button control

let i = 0;
let strArr = greeting_message.toUpperCase().split('').map(elem => elem == " " ? "_" : elem); //HELLO_
let emptyStr = '';

let forward = true;


function typing() {

  if(forward && greeting_btn.textContent === "Stop") {
    emptyStr += strArr[i];
    greeting_message_container.innerHTML = emptyStr;
    i++;
    if(i < strArr.length) {
      setTimeout(typing, 80);
    } else {
      forward = false;
      setTimeout(typing, 80);
    }
  } else if(greeting_btn.textContent === "Start"){
    clearTimeout(typing);
  } else{
    emptyStr = emptyStr.slice(0, -1);
    greeting_message_container.innerHTML = emptyStr;
    i--;
    if(i > 0) {
      setTimeout(typing, 80);
    } else if (i === 0) {
      greeting_message_container.innerHTML = '&nbsp;'; // non breaking space
      forward = true;
      setTimeout(typing, 80);
    }
}
}

// greeting control button


greeting_btn.addEventListener('click', () => {
  if(greeting_btn.textContent === "Stop") {
    greeting_btn.textContent = "Start";
  } else if(greeting_btn.textContent === "Start") {
    setTimeout(typing, 80);
    greeting_btn.textContent = "Stop"; 
  }
});

typing();


// toggle button control

const btn = document.querySelector(".bar");
const nav = document.querySelector(".nav_container");
const socialnetwork = document.querySelector(".socialnetwork");

btn.addEventListener('click', () => {
  nav.classList.toggle("nav_active");
  socialnetwork.classList.toggle("nav_active");
})




// changing main

const click_home = document.querySelector('.home a');
const click_about = document.querySelector('.about a');
const click_why = document.querySelector('.why a');
const click_pf = document.querySelector('.requirement a');
const click_contact = document.querySelector('.contact a');

const home_main = document.querySelector('.home_main');
const about_main = document.querySelector('.about_main');
const why_main = document.querySelector('.why_main');
const pf_main = document.querySelector('.requirement_main');
const contact_main = document.querySelector('.contact_main');


click_home.addEventListener('click', ()=> {
  click_home.style.borderBottom = `solid 1px #f38181`;
  click_about.style.borderBottom = `none`;
  click_why.style.borderBottom = `none`;
  click_pf.style.borderBottom = `none`;
  click_contact.style.borderBottom = `none`;

  home_main.style.display = 'block';
  about_main.style.display = 'none';
  pf_main.style.display = 'none';
  why_main.style.display = 'none';
  contact_main.style.display = 'none';
})
click_about.addEventListener('click', ()=> {
  click_home.style.borderBottom = `none`;
  click_about.style.borderBottom = `solid 1px #f38181`;
  click_why.style.borderBottom = `none`;
  click_pf.style.borderBottom = `none`;
  click_contact.style.borderBottom = `none`;

  home_main.style.display = 'none';
  about_main.style.display = 'block';
  pf_main.style.display = 'none';
  why_main.style.display = 'none';
  contact_main.style.display = 'none';
})
click_pf.addEventListener('click', ()=> {
  click_home.style.borderBottom = `none`;
  click_about.style.borderBottom = `none`;
  click_why.style.borderBottom = `none`;
  click_pf.style.borderBottom = `solid 1px #f38181`;
  click_contact.style.borderBottom = `none`;

  home_main.style.display = 'none';
  about_main.style.display = 'none';
  pf_main.style.display = 'block';
  why_main.style.display = 'none';
  contact_main.style.display = 'none';
})
click_why.addEventListener('click', ()=> {
  click_home.style.borderBottom = `none`;
  click_about.style.borderBottom = `none`;
  click_why.style.borderBottom = `solid 1px #f38181`;
  click_pf.style.borderBottom = `none`;
  click_contact.style.borderBottom = `none`;

  home_main.style.display = 'none';
  about_main.style.display = 'none';
  pf_main.style.display = 'none';
  why_main.style.display = 'block';
  contact_main.style.display = 'none';
})

click_contact.addEventListener('click', ()=> {
  click_home.style.borderBottom = `none`;
  click_about.style.borderBottom = `none`;
  click_why.style.borderBottom = `none`;
  click_pf.style.borderBottom = `none`;
  click_contact.style.borderBottom = `solid 1px #f38181`;

  home_main.style.display = 'none';
  about_main.style.display = 'none';
  pf_main.style.display = 'none';
  why_main.style.display = 'none';
  contact_main.style.display = 'block';
})

// Submit event

const submit_msg = document.querySelector(".submit_msg");
const input = document.querySelectorAll("input");
const textArea = document.querySelector("textarea");
const inputArr = Array.from(input);

console.log(inputArr);
input.forEach(e => e.addEventListener('focus', ()=>{
  e.value = "";
}))

textArea.addEventListener('focus', (e)=>{
  e.target.value = "";
})

document.getElementById("submit_btn").addEventListener('click', () => {  
    if(inputArr[0].value === "" || inputArr[0].value === "Required" || inputArr[1].value === "" || inputArr[1].value === "Required" || inputArr[2].value === "" || inputArr[2].value === "account@email.com") {
      alert("Please complete the form");
    } else {
      alert('Thank you for submitting. I will get back to you shortly.');
    }
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


//arrows eventlistener / video carousel

const left_arrow = document.querySelector(".left-arrow");
const right_arrow = document.querySelector(".right-arrow");

let arrowNum = 0;

console.log(arrowNum);
right_arrow.addEventListener('click', () => {
  if(arrowNum < 2) {
    arrowNum++;
    showVideo();
  } else if(arrowNum === 2) {
    arrowNum = 0;
    showVideo();
  }
  console.log(arrowNum);
})

left_arrow.addEventListener('click', () => {
  if(arrowNum > 0) {
    arrowNum--;
    showVideo();
  } else if(arrowNum === 0) {
    arrowNum = 2;
    showVideo();
  }
  console.log(arrowNum);
})

function showVideo() {
  if(arrowNum === 0) return getvideoUrl('media/carrot_game.mp4');
  if(arrowNum === 1) return getvideoUrl('media/shopping_list.mp4');
  if(arrowNum === 2) return getvideoUrl('media/coordinates.mp4');
}



// "About me" section click & get text

const img_seoul = document.querySelector(".about_img li:nth-child(1) img");
const img_six = document.querySelector(".about_img li:nth-child(2) img");
const img_food = document.querySelector(".about_img li:nth-child(3) img");
const img_cat = document.querySelector(".about_img li:nth-child(4) img");


const about_txt_container = document.querySelector(".about_text_container");

const seoul = `I was born and raised in South Korea. 
I was a teacher in my home city of Incheon. While teaching I met my future husband who was working as the only foreign teacher in the school. As he sometimes struggled to understand Korean curture and couldn't find ingredients at the supermarket, I helped him a lot and we became close. 
After several years together we decided to move to England. So here I am now...`;

const six = `I came to the UK 6 years ago. I had only visited here on holiday a few times so it was a big step for me to relocate and leave my family and friends behind. 
When I arrived in England, I began to work as a florist, creating floral arrangements for individuals and events. 
From there I moved to office-based work, researching and creating reports for Korean SMEs to expand their horizons. This has led me to where I am today, creating web applications with aim of helping others to achieve their digital goals while developing my skillset.`;

const study = `I studied Home Economics Education at university in Seoul. I had decided to learn HEE because when I was little, everyone told me that being a teacher is good for girls as we can look after family better while we have stable jobs. In addition, I really liked my home economics teacher. She was my role model because I thought she was fashionable and looked very cool. 
Looking back now I realised that my world was so limited. At that time in Korea, girls were taught home economics more but not so much technology or computer science. I graduated girl's middle/high school and I wasn't given options to select computer science in the school's curriculum. I only learned computer science 1 hour a week and only in the 1st grade of middle school while students at the boy's school were learning technology and computer science 3-4 hours a week. 
Now I think I could have had different career path if I was given choices like the boys. Becuase I made my decsion (very comfortably) to learn HEE without hesitation despite being offered a place studying civil engineering at a different universitiy.`

const yoga = `When I have some spare time I like doing yoga. As I spend a lot of time sitting to do coding and do my work, I realised that I need to keep balance of my body and proper exercise. I love doing yoga becuase I enjoy the time I can put every thoughts and worries away while I do it. It also keeps my body fit! 
During lockdown, I found lots of good yoga tutorials on Youtube and follow them regulary and it has been really good. But I can't wait to join a yoga class in a studio!`;

const aboutTextContainer = document.querySelector(".about_text_container");

// img_seoul.addEventListener('mouseover', (e) => {
//   e.target.style.opacity = "100%";
// })

// img_seoul.addEventListener('mouseleave', (e) => {
//   e.target.style.opacity = "50%";
// })

// function checkContent() {
//   if(aboutTextContainer.textContent === seoul) {
//     img_seoul.style.opacity = "100%";
//     img_six.style.opacity = "50%";
//     img_food.style.opacity = "50%";
//     img_cat.style.opacity = "50%";
//   } else if(aboutTextContainer.textContent === six) {
//     img_seoul.style.opacity = "50%";
//     img_six.style.opacity = "100%";
//     img_food.style.opacity = "50%";
//     img_cat.style.opacity = "50%";
//   } else if(aboutTextContainer.opacity === study) {
//     img_seoul.style.opacity = "50%";
//     img_six.style.opacity = "50%";
//     img_food.style.opacity = "100%";
//     img_cat.style.opacity = "50%";
//   } else if(aboutTextContainer.opacity === yoga) {
//     img_seoul.style.opacity = "50%";
//     img_six.style.opacity = "50%";
//     img_food.style.opacity = "50%";
//     img_cat.style.opacity = "100%";
//   }
// }

img_seoul.addEventListener('click', (e) => {
  getTxt(seoul);
  e.target.classList.remove("opacity-two");
  e.target.classList.add("opacity-one");
  img_six.classList.remove("opacity-one");
  img_food.classList.remove("opacity-one");
  img_cat.classList.remove("opacity-one");
  img_six.classList.add("opacity-two");
  img_food.classList.add("opacity-two");
  img_cat.classList.add("opacity-two");
})

img_six.addEventListener('click', (e) => {
  getTxt(six);
  e.target.classList.remove("opacity-two");
  e.target.classList.add("opacity-one");
  img_seoul.classList.remove("opacity-one");
  img_food.classList.remove("opacity-one");
  img_cat.classList.remove("opacity-one");
  img_seoul.classList.add("opacity-two");
  img_food.classList.add("opacity-two");
  img_cat.classList.add("opacity-two");
})

img_food.addEventListener('click', (e) => {
  getTxt(study);
  e.target.classList.remove("opacity-two");
  e.target.classList.add("opacity-one");
  img_seoul.classList.remove("opacity-one");
  img_six.classList.remove("opacity-one");
  img_cat.classList.remove("opacity-one");
  img_seoul.classList.add("opacity-two");
  img_six.classList.add("opacity-two");
  img_cat.classList.add("opacity-two");
})

img_cat.addEventListener('click', (e) => {
  getTxt(yoga);
  e.target.classList.remove("opacity-two");
  e.target.classList.add("opacity-one");
  img_seoul.classList.remove("opacity-one");
  img_six.classList.remove("opacity-one");
  img_food.classList.remove("opacity-one");
  img_seoul.classList.add("opacity-two");
  img_six.classList.add("opacity-two");
  img_food.classList.add("opacity-two");
})

function getTxt(title) {
  about_txt_container.textContent = title;
}

// requirements button event

const fccReqBtn = document.querySelector(".fcc_title");
const codeWarsReqBtn = document.querySelector(".codewars_title");
const gitHubReqBtn = document.querySelector(".github_title");


fccReqBtn.addEventListener('click', (e) => {
  setTimeout(() => {document.querySelector(".fcc_arrow_down1").classList.add('arrow_visible')}, 500);
  setTimeout(() => {document.querySelector(".fcc_arrow_down2").classList.add('arrow_visible')}, 1200);
  setTimeout(() => {document.querySelector(".fcc_arrow_down3").classList.add('arrow_visible')}, 1900);

  setTimeout(() => {document.querySelector(".fcc_done").classList.add('done_visible')}, 2700);

  setTimeout(() => {document.querySelector(".fcc_req_a").classList.add('a_visible')}, 3000);

});

codeWarsReqBtn.addEventListener('click', (e) => {
  setTimeout(() => {document.querySelector(".codewars_arrow_down1").classList.add('arrow_visible')}, 500);
  setTimeout(() => {document.querySelector(".codewars_arrow_down2").classList.add('arrow_visible')}, 1200);
  setTimeout(() => {document.querySelector(".codewars_arrow_down3").classList.add('arrow_visible')}, 1900);

  setTimeout(() => {document.querySelector(".codewars_done").classList.add('done_visible')}, 2700);

  setTimeout(() => {document.querySelector(".codewars_req_a").classList.add('a_visible')}, 3000);
});

gitHubReqBtn.addEventListener('click', (e) => {
  setTimeout(() => {document.querySelector(".github_arrow_down1").classList.add('arrow_visible')}, 500);
  setTimeout(() => {document.querySelector(".github_arrow_down2").classList.add('arrow_visible')}, 1200);
  setTimeout(() => {document.querySelector(".github_arrow_down3").classList.add('arrow_visible')}, 1900);

  setTimeout(() => {document.querySelector(".github_done").classList.add('done_visible')}, 2700);

  setTimeout(() => {document.querySelector(".github_req_a").classList.add('a_visible')}, 3000);
});




// why fac

const whyContent = ["<b>The people 🥰</b><br>I want to be a part of FAC's 2021 Autumn cohort because of the friendly and supportive people in the FAC community. I often become intimidated and shy when I see new people or start something new. I remember I had to encourage myself a lot when I first decided to join the FAC community last year because I was so scared and worried about showing my lack of knowledge of coding to others. I also worried that I would look silly when I didn't understand or I wouldn't be able to properly explain what I was thinking. But, as soon as I joined the first coaching session, I felt so comfortable as everyone was welcoming, patient and so friendly. I could come this far because of the people I've met through the FAC community. And I believe that I can even go further if I become a part of FAC's upcoming cohort and grow with this community.","<b>The environment 🙌</b><br>I feel happy when I share my ideas with other people and improve them together. Learning to code through the FAC community was all about helping and improving. I enjoyed every single session, workshop and interaction with everyone. The use of peer led learning is perfect for me as I feel more comfortable when I share my thoughts and get assured by others. I also believe this is a very effective way to learn something new. I've learned a lot from reading and trying to understand code others wrote and I could also learn to code precisely while I explained my thought processes and code to others. Within FAC's supportive environment, I believe that I can develop my coding skills very effectively and make my dreams come true.", "<b>Collaboration 👯‍♀️</b><br>I found that collaborating is one of the most important things in a workplace. And I appreciate that peer to peer learning at FAC would accelerate my ability to become a good developer who can work with anyone and in any industry. During the coaching sessions, it was a real pleasure when I solved problems with others and was truly amazing to see how we could approach the problems in different ways and improve our solutions. Sharing achievements is also very valuable to me because it allows us to acknowledge everyone's work and it gives us confidence. I was looking for an environment where everyone supports each other and recognises and appreciates other's work. I believe that I can get the best result when I work with other people, therefore I hope to have more chances to work with different people on various challenges and projects through FAC's next cohort.", "<b>The perfect place to improve my skills 🎯</b><br>Through working with the FAC community, I’ve developed my coding skills and also improved my language skills a lot. Explaining my thoughts, code, and ideas was one of the obstacles I anticipated when I decided to learn to code. At first I didn't think I would get a proper job as a developer even when I got to the point where I understood coding fairly well because I am not a native English speaker. But since I worked with other people in the FAC community, I could develop my interpretational skills and became more confident when explaining my code to others. FAC's unique, inclusive environment enabled this and because of this I believe I can be a professional developer in the UK. In a longer term, I hope that I would be able to encourage and work with people who are in the same situation that I was in to achieve their goals.", "<b>Following my passion ✨</b><br>I’m passionate about coding and have been wanting to change my career as soon as I found the joy of coding. I love solving problems and learning new skills and ways to tackle them. I hope to have a career as a developer but I realised that It's really hard to get an entry level developer job without a CS degree or commercial experience. I want to build real projects and gain some commercial work experience as this is what many employers are looking for. So FAC's apprenticeship scheme is perfect for me as I can follow my passion and develop my skills while I am guaranteed an apprentice job. I am excited by the prospect of this being the start of a long and successful career in code.", "<b>The structure 🕋</b><br>Like other people, I'd been learning to code from scratch myself. When I decided to dive in to this coding world, I really needed a structured learning process. As my financial accessibility was limited, I had to rely on online tutorials and communities and it sometimes became hard to see if I was making progress and moving in the right direction. Since I joined the FAC community, I've received a lot of support and I felt like I'm taking positive steps towards my goals. All the workshops and challenges from FAC led me to improve my ability and I believe that I would be able to continue to develop my skills within FAC's structured curriculum and peer led learning.", "<b>Personal development 💪</b><br>As a woman growing up in South Korea in the 90's, I was not encouraged to speak up or demonstrate my knowledge of a subject. Instead, it was seen as better for me and my friends to stay quiet and meek. Teaching was one of the few career paths that I was encouraged to take, rather than any of the more 'masculine' careers like tech. As I grew up and learned more about myself and the world, I realised that it was ok for me to ask questions and challenge myself and others, and that I could follow whatever path I wanted. The decision to get into coding was a difficult one but my experience with FAC has shown me that it was the right one. Working in FAC has furthered my personal development and has helped me to realise that I have a lot to offer and that my thoughts and ideas have value. I would love to continue this journey with the FAC community and, when I'm ready, I hope that I can pass my knowledge on to others who are coming from a similar situation to me."].reverse();


const whyFac = document.querySelector('.why_main');
const why = document.querySelector('.why');
const getSize = document.querySelector(".home_main").getBoundingClientRect();
const flowerSize = 170;


window.addEventListener('load', () => {
  if(getSize.width > 767) {
    loadFlowers();
    document.querySelectorAll('.flower').forEach(elem => elem.addEventListener('click', (e) => { 
      e.target.style.display = 'none';
      createElementP();
    }
    ));
  } else {
    for(let i = 0; i < 7; i++) {
      createElementP();
    }
  }
})

function loadFlowers() {
  start('flower', 7, 'media/flower.png');
}

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

function createElementP () {
  const createP = document.createElement('p');
  createP.setAttribute('class', 'why_p');
  createP.innerHTML = whyContent.pop();
  whyFac.appendChild(createP);
}


// make logo clickable and reset the page

const logo = document.querySelector(".logo");

logo.addEventListener('click', reloadPage);

function reloadPage() {
  location.reload();
}


// requirement section 
// mobile respoinsive

const requirementContent = document.querySelector(".requirement_ul1");

removeRequirements();
function removeRequirements() {
  if(getSize.width < 768) {
    requirementContent.remove();
    createRequirements();

  }
}
function createRequirements() {
  const ul = document.createElement('ul');
  const p1 = document.createElement('p');
  p1.setAttribute('class', 'mobile-fcc');
  const p2 = document.createElement('p');
  p2.setAttribute('class', 'mobile-codewars');
  const p3 = document.createElement('p');
  p3.setAttribute('class', 'mobile-github');
  const button1 = document.createElement('div');
  button1.setAttribute('class', 'requirement-btn');
  const button2 = document.createElement('div');
  button2.setAttribute('class', 'requirement-btn');
  const button3 = document.createElement('div');
  button3.setAttribute('class', 'requirement-btn');

  p1.textContent = `Check out my FreeCodeCamp`;
  p2.textContent = `Check out my Codewars`;
  p3.textContent = `Check out my Github`;
  button1.innerHTML = `<a href="https://www.freecodecamp.org/jhp" target="_blank">Click to check</a>`;
  button2.innerHTML = `<a href="https://www.codewars.com/users/Jihye_P" target="_blank">Click to check</a>`;
  button3.innerHTML = `<a href="https://github.com/jijip41/my-website" target="_blank">Click to check</a>`;

  pf_main.appendChild(ul);
  pf_main.appendChild(p1);
  pf_main.appendChild(button1);
  pf_main.appendChild(p2);
  pf_main.appendChild(button2);
  pf_main.appendChild(p3);
  pf_main.appendChild(button3);
}
