var tl = gsap.timeline();

tl
.from('.animate-links',{
    stagger: .2,
    duration: .8,
    opacity: 0,
    x: 30,
    ease: 'Expo.easeout'
})

.from('.animate-bg',{
    duration: .3,
    opacity: 0,
    x: -30,
    ease: 'Expo.easeout'
})

.from('.overlay-animate',{
    duration: .3,
    left: '0%', 
    width: '0%',
    ease: 'Expo.easeInOut',
})
.to('.overlay-animate',{
    duration: .3,
    left: '0%',
    width: '100%',
    ease: 'Expo.easeInOut',
})

.from('.content-anim',{
    stagger: .1,
    duration: .3,
    opacity: 0,
    x: 30,
    ease: 'Expo.easeout'
})