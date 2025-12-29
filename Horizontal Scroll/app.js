gsap.from("#pg1 h1",{
    opacity:0,
   top:"30%",
    duration:1.5,
 
    delay:1
})


// Horizontal scroll for #pg2 h1
gsap.to("#pg2 h1", {
    x: () => {
        const h1 = document.querySelector('#pg2 h1');
        return -(h1.scrollWidth - window.innerWidth);
    },
    ease: "none",
    scrollTrigger: {
        trigger: "#pg2",
        scroller: "body",
        start: "top top",
        end: () => `+=${document.querySelector('#pg2 h1').scrollWidth - window.innerWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1
    }
});

