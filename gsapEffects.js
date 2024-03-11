gsap.registerPlugin(ScrollTrigger) 

gsap.to('.showcase-top', {
    scrollTrigger: {
        trigger: '.showcase-top',
        //toggleActions: "restart pause reverse none",
        scrub: true,
        //pin: true,
        start: 'top',
        markers: true,
    },
    x: -300,
    opacity: 0.5,
    //rotation: 360,
    duration: 1,
    delay: 1
})