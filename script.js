/* ==========================
PRELOADER
========================== */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";

    setTimeout(() => {

        preloader.style.display = "none";

    }, 400);

});

/* ==========================
HEADER SCROLL
========================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.background = "rgba(0,0,0,.92)";
        header.style.backdropFilter = "blur(25px)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(5,5,5,.72)";
        header.style.boxShadow = "none";

    }

});

/* ==========================
COUNTER ANIMATION
========================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 60;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

}, {

    threshold: .5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/* ==========================
FAQ
========================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const btn = item.querySelector(".faq-question");

    btn.addEventListener("click", () => {

        faqItems.forEach(f => {

            if (f !== item) {

                f.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

/* ==========================
SCROLL REVEAL
========================== */

const reveals = document.querySelectorAll(

"section,.feature-card,.testimonial-card,.counter-card,.stat-card"

);

const revealObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{

threshold:.15

});

reveals.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition="all .8s ease";

revealObserver.observe(el);

});

/* ==========================
SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* ==========================
CURRENT YEAR
========================== */

const year=document.querySelector("#year");

if(year){

year.textContent=new Date().getFullYear();

}