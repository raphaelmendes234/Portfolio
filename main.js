
// Toggle Menu ----------------------------------------

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const bar = document.querySelectorAll(".bar");


for (let i = 0; i < bar.length; i++) {
    bar[i].style.transform = "rotate("+ 0 +"deg)";
}

menu.style.height = 0 + "px";

function showMenu(){
    
    burger.addEventListener("click", function(){
    if (menu.style.height == 0 + "px") {
        menu.style.height = 140 + "px";

        bar[0].style.transform = "rotate("+ 45 +"deg)";
        bar[1].style.width = 0;
        bar[2].style.transform = "rotate("+ -45 +"deg)";

    } else {
        menu.style.height = 0 + "px";

        bar[0].style.transform = "rotate("+ 0 +"deg)";
        bar[1].style.width = 2 + "rem";
        bar[2].style.transform = "rotate("+ 0 +"deg)";
    }
    });

};

showMenu();






// Text Reveal GSAP ----------------------------------------

gsap.registerPlugin(ScrollTrigger);


function appearAnimation() {
    


// Section Title

// Title h1
let tl = gsap.timeline({defaults : {ease:"power1.inOut"}});

tl.to("h1 >.title-animated", {
    y: 0,
    stagger: 0.2,
    duration: 0.5,
}),



// Section About

// Title h2
gsap.to(".about-h2-animated", {
    scrollTrigger: {
       trigger: ".about-h2-animated",
       toggleActions: "restart pause resume reset"  
    },
    y: 0,
    stagger: 0.2,
    duration: 0.5,
})

// Paragraphs
gsap.to(".about-p-animated", {
    scrollTrigger: {
       trigger: ".about-p-animated",
       toggleActions: "restart pause resume reset"
    },
    y: 0,
    stagger: 0.2,
    duration: 0.5,
})

// Icons
gsap.to(".icon_container", {
    scrollTrigger: {
       trigger: ".icon_container",
       toggleActions: "restart pause resume reset"
    },
    y: 0,
    stagger: 0.2,
    duration: 0.5,
})



// Section Projects

// Graphic projects

// Title 2
gsap.to(".proj-graphic-h2-animated", {
    scrollTrigger: {
       trigger: ".proj-graphic-h2-animated",
       toggleActions: "restart pause resume reset"
    },
    y: 0,
    stagger: 0.2,
    duration: 0.5,
})

// Paragraph

gsap.to(".proj-p-animated", {
    scrollTrigger: {
       trigger: ".proj-p-animated",
       toggleActions: "restart pause resume reset"
    },
    y: 0,
    stagger: 0.2,
    duration: 0.5,
})


// Title h3
    
gsap.to(".proj-h3-animated", {
    scrollTrigger: {
       trigger: ".proj-h3-animated",
       toggleActions: "restart pause resume reset"
    },
    y: 0,
    stagger: 0.2,
    duration: 0.5,
})


// Card img

gsap.to(".card_img", {
    scrollTrigger: {
       trigger: ".card_img",
       toggleActions: "restart pause resume reset"
    },
    opacity: 1,
    stagger: 0.2,
    ease: "none",
    duration: 0.5,
})



// Web projects
gsap.to(".proj-web-h2-animated", {
    scrollTrigger: {
       trigger: ".proj-web-h2-animated",
       toggleActions: "restart pause resume reset"
    },
    y: 0,
    stagger: 0.2,
    duration: 0.5,
})

gsap.to(".web_link", {
    scrollTrigger: {
       trigger: ".web_link",
       toggleActions: "restart pause resume reset"
    },
    opacity: 1,
    stagger: 0.2,
    duration: 0.5,
})




// Footer

// Title h2
gsap.to(".footer-h2-animated", {
    scrollTrigger: {
       trigger: ".footer-h2-animated",
       toggleActions: "restart pause resume reset"
    },
    y: 0,
    stagger: 0.2,
    duration: 0.5,
})


// Link a

gsap.to(".footer-a-animated", {
    scrollTrigger: {
       trigger: ".footer-a-animated",
       toggleActions: "restart pause resume reset"
    },
    y: 0,
    stagger: 0.2,
    duration: 0.5,
})

}

// Scroll animation (PTN CA MARCHE) ----------------------------------

let proxy = {skew:0}, //Va permettre de gérer le skew (qd ça penche)

 skewSetter = gsap.quickTo(".getSkewed","skewY", "deg"); //Définit quel propriétés de quel élément on anime

 clamp = gsap.utils.clamp(-25,25) //Définit les limites de quand ça penche en fonction du scroll


// Donc au scroll
let scrolling = ScrollTrigger.create({
    wrapper: "body", //le contenant 
    content: "main", //le contenu qui sera animé
    onUpdate: (self) => {
        let skew = clamp(self.getVelocity()/-300); // On lie le skew avec la vitesse du scroll 
                                                      
        if(Math.abs(skew) > Math.abs(proxy.skew)) {  //en vrai jsp mais ça fait le taf ^^ merci gsap
            proxy.skew = skew;
            gsap.to(proxy, {skew: 0, duration: 0.4, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
        }
    }
})


// Loading page -------------------------------
function loadingScreen() {

    let tlLoad = gsap.timeline({defaults : {ease:"power1.inOut"} });

tlLoad.to(".second_panel", {  height: 0, delay: 0.2, duration: 0.75}),

tlLoad.to(".first_panel", {height: 0, duration: 0.5}, "-=0.5")

const timeOut = setTimeout(appearAnimation, 750);

}

loadingScreen();











// test 

