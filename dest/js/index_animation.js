'use strict';

// import { Timeline } from "gsap/gsap-core";


TweenMax.to('.introDeco1', 3, {
    rotation: 5,
    yoyo: true,
    repeat: -1,
    ease: Sine.easeOut
});
TweenMax.to('.introDeco2', 2, {
    rotation: -5,
    x: 10,
    yoyo: true,
    repeat: -1,
    ease: Sine.easeOut
});
TweenMax.to('.introDeco3', 3, {
    rotation: 3,
    y: 15,
    yoyo: true,
    repeat: -1,
    ease: Sine.easeOut
});
TweenMax.to('.introDeco4', 4, {
    rotation: 3,
    y: 10,
    x: 5,
    yoyo: true,
    repeat: -1,
    ease: Sine.easeOut
});
TweenMax.to('.introDeco5', 4, {
    rotation: 83,
    y: 3,
    x: 6,
    yoyo: true,
    repeat: -1,
    ease: Sine.easeOut
});

/////////////////////////////////

//section.about

var controller = new ScrollMagic.Controller();

// var tl= new TimelineMax({
//     repeat: 1,
//     yoyo: true
// });

// tl.from('div.about h2',0.5,{
//     scale: 0,
// }).from('div.about p',0.5,{
//     scale: 0,
//     x: 50,
// });

////////////////////////////////

//div.where

// let whereCat= TweenMax.from('#whereCat',1,{
//     y: -100,
//     x: 100,
//     scale: 0.8,
// });

TweenMax.to('.left.cat', 1, {
    y: 5,
    x: 3,
    yoyo: true,
    repeat: -1
});

TweenMax.to('.left.cloud', 2, {
    y: 2,
    x: 10,
    yoyo: true,
    repeat: -1
});

// new ScrollMagic.Scene({
//     triggerElement: '#trigger01',
//     duration: 600,
//     offset: 0,
//     triggerHook: 0.3,
// }).setTween(whereCat).addIndicators().addTo(controller);

// let whereDog= TweenMax.from('#whereDog',3,{
//     x: 400,
//     y: -30,
//     scale: 0.8,
//     ease: Circ.easeOut,
// });

TweenMax.to('.right.dog', 2, {
    y: 2,
    x: 5,
    rotation: 3,
    yoyo: true,
    repeat: -1
});

TweenMax.to('.right.cloud', 4, {
    y: 2,
    x: 10,
    yoyo: true,
    repeat: -1
});

// new ScrollMagic.Scene({
//     triggerElement: '#trigger02',
//     duration: 400,
//     offset: -100,
//     triggerHook: 0.3,
// }).setTween(whereDog).addIndicators().addTo(controller);

////////////////////////////////
//section.collar

TweenMax.to('.collarDeco1', 1, {
    rotation: 5,
    yoyo: true,
    repeat: -1,
    ease: Power2.easeOut
});

TweenMax.to('.collarDeco2', 2, {
    x: 3,
    y: 8,
    yoyo: true,
    repeat: -1,
    ease: Expo.easeOut
});

TweenMax.to('.collarDeco3', 2, {
    x: 6,
    y: 3,
    yoyo: true,
    repeat: -1,
    ease: Power2.easeOut
});

TweenMax.to('.collarDeco4', 3, {
    x: 3,
    y: 6,
    yoyo: true,
    repeat: -1,
    ease: Power2.easeOut
});

TweenMax.to('.collarDeco5', 2, {
    x: 5,
    y: 6,
    yoyo: true,
    repeat: -1,
    ease: Power2.easeOut
});

TweenMax.to('.collarDeco6', 2, {
    rotation: 5,
    yoyo: true,
    repeat: -1,
    ease: Expo.easeOut
});

TweenMax.to('.collarDeco7', 2, {
    rotation: 360,
    repeat: -1,
    ease: Power0.easeNone
});

TweenMax.to('.collarDeco8', 3, {
    rotation: 360,
    repeat: -1,
    ease: Power0.easeNone
});

////////////////////////////////
//footer
TweenMax.staggerTo('.paw', 1, {
    y: 5,
    opacity: 0.7,
    yoyo: true,
    repeat: -1,
    ease: Power2.easeOut
}, 3);