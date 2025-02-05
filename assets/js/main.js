/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");
  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}
/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};
function headerShadow() {
  const navHeader =document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}
/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["A YOUTUBE","EDITOR","EDITOR"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})
/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr2 = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})


const sr1 = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});
// ScrollReveal basic configuration
const sr = ScrollReveal({
  origin: 'top', // Animation starts from the top
  distance: '80px', // Distance it moves when revealed
  duration: 2000, // Animation duration in milliseconds
  reset: true // Animations will repeat every time you scroll
});

// Apply ScrollReveal animation to each portfolio item
sr.reveal('.portfolio-item', {
  interval: 200 // Delay between each portfolio item animation
});


/* -- Apply ScrollReveal to elements in the 'why-me' section -- */
sr.reveal('.top-header', {});          // Animates the section heading
sr.reveal('.project-container', { delay: 200 });  // Animates the container holding the content
sr.reveal('.content h1', { delay: 300 });    // Animates the first heading inside the content
sr.reveal('.content p', { delay: 400, interval: 100 }); // Animates each paragraph with staggered effect
sr.reveal('.features li', { delay: 500, interval: 100 });  // Animates each list item in the features
sr.reveal('.highlight', { delay: 600 });   // Animates the highlighted text

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const srSkills = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 2000,
  reset: true
});

/* -- Apply ScrollReveal to the skills section -- */
srSkills.reveal('.top-header', {});
srSkills.reveal('.skill-box', { interval: 200 });


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})
/* -- HEADINGS -- */
sr.reveal('.top-header',{})
/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})
/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')
function scrollActive() {
const scrollY = window.scrollY;
sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')
  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
  }  else {
    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
  }
})
}
window.addEventListener('scroll', scrollActive)
  
  
   
