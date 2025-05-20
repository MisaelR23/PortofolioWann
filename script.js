gsap.registerPlugin(ScrollTrigger);
gsap
    .timeline({
        scrollTrigger: {
            trigger: '.wrapper',
            start: 'top top',
            end: '+=150%',
            pin: true,
            scrub: true,
        }
    })
    .to('img', {
        scale: 2,
        z: 350,
        transformOrigin: 'center center',
        ease: 'power1.inOut'
    })
    .to(
        '.section.hero',
        {
            scale: 1.5,
            transformOrigin: 'center center',
            ease: 'power1.inOut'
        },
    );