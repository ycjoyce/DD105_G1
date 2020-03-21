var t1 = new TimelineMax({
    repeat: -1,
    repeatDelay: 2,
    repeatDelay: 1,
});


if(document.body.clientWidth>=1200){//xl 
    t1.to("img.dog_gif", 0.5, {
        alpha: 1,
        startAt: { alpha: 0 },
        ease: Power0.easeIn
    })
    .to("img.dog_gif", 3, {
        x: 320,
        startAt: { x: 0 },
        ease: Power0.easeIn
    })
    .to("img.dog_gif", 1, {
        alpha: 0,
    })
    .to("img.heart", 1, {
        y: -50,
        alpha: 1,
        startAt: { y: 0 , alpha: 0},
        ease: Power0.easeIn,
    })
    .to("img.heart", 0.5, {
        scaleX: 1.1,
        scaleY: 1.1, 
        yoyo: true,
        repeat: 4,
        ease: Power0.easeIn,
    })
    .to("img.heart", 0.5, {
        alpha: 0,
        startAt: { alpha: 1 },
        ease: Power0.easeIn,
    })
}else if(document.body.clientWidth>=992 && document.body.clientWidth<=1199){//lg
    t1.to("img.dog_gif", 0.5, {
        alpha: 1,
        startAt: { alpha: 0 },
        ease: Power0.easeIn
    })
    .to("img.dog_gif", 3, {
        x: 220,
        startAt: { x: 0 },
        ease: Power0.easeIn
    })
    .to("img.dog_gif", 1, {
        alpha: 0,
    })
    .to("img.heart", 1, {
        y: -50,
        alpha: 1,
        startAt: { y: 0 , alpha: 0},
        ease: Power0.easeIn,
    })
    .to("img.heart", 0.5, {
        scaleX: 1.1,
        scaleY: 1.1, 
        yoyo: true,
        repeat: 4,
        ease: Power0.easeIn,
    })
    .to("img.heart", 0.5, {
        alpha: 0,
        startAt: { alpha: 1 },
        ease: Power0.easeIn,
    })
}else if(document.body.clientWidth>=768 && document.body.clientWidth<=991){//md
    t1.to("img.dog_gif", 0.5, {
        alpha: 1,
        startAt: { alpha: 0 },
        ease: Power0.easeIn
    })
    .to("img.dog_gif", 2.5, {
        x: 220,
        startAt: { x: 0 },
        ease: Power0.easeIn
    })
    .to("img.dog_gif", 1, {
        alpha: 0,
    })
    .to("img.heart", 1, {
        y: -50,
        alpha: 1,
        startAt: { y: 0 , alpha: 0},
        ease: Power0.easeIn,
    })
    .to("img.heart", 0.5, {
        scaleX: 1.1,
        scaleY: 1.1, 
        yoyo: true,
        repeat: 4,
        ease: Power0.easeIn,
    })
    .to("img.heart", 0.5, {
        alpha: 0,
        startAt: { alpha: 1 },
        ease: Power0.easeIn,
    })
}else if(document.body.clientWidth>=576 && document.body.clientWidth<=767){//sm
    t1.to("img.dog_gif", 0.5, {
        alpha: 1,
        startAt: { alpha: 0 },
        ease: Power0.easeIn
    })
    .to("img.dog_gif", 2, {
        x: 170,
        startAt: { x: 0 },
        ease: Power0.easeIn
    })
    .to("img.dog_gif", 1, {
        alpha: 0,
    })
    .to("img.heart", 1, {
        y: -50,
        alpha: 1,
        startAt: { y: 0 , alpha: 0},
        ease: Power0.easeIn,
    })
    .to("img.heart", 0.5, {
        scaleX: 1.1,
        scaleY: 1.1, 
        yoyo: true,
        repeat: 4,
        ease: Power0.easeIn,
    })
    .to("img.heart", 0.5, {
        alpha: 0,
        startAt: { alpha: 1 },
        ease: Power0.easeIn,
    })
}


TweenMax.to('#bubble1',30,{
    bezier: {//貝茲曲線
        values:[
            {x:-100,y:-100},
            {x:300,y:250},
            {x:500,y:300},
            {x:600,y:500},
            {x:700,y:600},
            {x:850,y:750},
        ],
        autoRotate: false,//形狀沿著曲線轉
    },
    startAt: { alpha: 0.6 , x: -200 , y: -200 },
    rotation: 360,
    scaleX: 1.2,
    scaleY: 1.2,
    alpha: 0.3,
    repeat: -1,
    repeatDelay: 1,
});

TweenMax.to('#bubble2',15,{
    bezier: {//貝茲曲線
        values:[
            {x:1300,y:300},
            {x:1100,y:250},
            {x:900,y:200},
            {x:600,y:150},
            {x:450,y:120},
            {x:300,y:60},
            {x:150,y:-200},
        ],
        autoRotate: false,//形狀沿著曲線轉
    },
    startAt: { alpha: 0.6 , x: 1500 , y: 250 },
    rotation: 360,
    scaleX: 1.2,
    scaleY: 1.2,
    alpha: 0.3,
    repeat: -1,
    repeatDelay: 1,
});


TweenMax.to('.introDeco1',3,{
    rotation: 5,
    yoyo: true,
    repeat: -1,
    ease: Sine.easeOut,
});
TweenMax.to('.introDeco2',2,{
    rotation: -5,
    x: 10,
    yoyo: true,
    repeat: -1,
    ease: Sine.easeOut,
});
TweenMax.to('.introDeco3',3,{
    rotation: 3,
    y: 15,
    yoyo: true,
    repeat: -1,
    ease: Sine.easeOut,
});
TweenMax.to('.introDeco4',4,{
    rotation: 3,
    y: 10,
    x: 5,
    yoyo: true,
    repeat: -1,
    ease: Sine.easeOut,
});
TweenMax.to('.introDeco5',4,{
    rotation: 83,
    y: 3,
    x: 6,
    yoyo: true,
    repeat: -1,
    ease: Sine.easeOut,
});


/////////////////////////////////

//header



// var tl= new TimelineMax({
//     repeat: 1,
//     yoyo: true
// });

// tl.from('header nav h1',0.5,{
//     y: -50,
// }).from('header nav ul:first-child li:first-child',0.5,{
//     y: -50,
// }).from('header nav ul:first-child li:nth-child(2)',0.5,{
//     y: -50,
// }).from('header nav ul:first-child li:nth-child(3)',0.5,{
//     y: -50,
// }).from('header nav ul:first-child li:nth-child(4)',0.5,{
//     y: -50,
// }).from('header nav ul:first-child li:nth-child(5)',0.5,{
//     y: -50,
// }).from('header nav ul:first-child li:nth-child(6)',0.5,{
//     y: -50,
// });

////////////////////////////////

//div.where

// let whereCat= TweenMax.from('#whereCat',1,{
//     y: -100,
//     x: 100,
//     scale: 0.8,
// });

TweenMax.to('.left.cat',1,{
    y: 5,
    x: 3,
    yoyo: true,
    repeat: -1, 
});

TweenMax.to('.left.cloud',2,{
    y: 2,
    x: 10,
    yoyo: true,
    repeat: -1, 
});


// let controller = new ScrollMagic.Controller();
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

TweenMax.to('.right.dog',2,{
    y: 2,
    x: 5,
    rotation: 3,
    yoyo: true,
    repeat: -1, 
});

TweenMax.to('.right.cloud',4,{
    y: 2,
    x: 10,
    yoyo: true,
    repeat: -1, 
});

// new ScrollMagic.Scene({
//     triggerElement: '#trigger02',
//     duration: 400,
//     offset: -100,
//     triggerHook: 0.3,
// }).setTween(whereDog).addIndicators().addTo(controller);

////////////////////////////////
//section.collar

TweenMax.to('.collarDeco1',1,{
    rotation: 5,
    yoyo: true,
    repeat: -1,
    ease: Power2.easeOut,
});

TweenMax.to('.collarDeco2',2,{
    x:3,
    y: 8,
    yoyo: true,
    repeat: -1,
    ease: Expo.easeOut,
});

TweenMax.to('.collarDeco3',2,{
    x:6,
    y: 3,
    yoyo: true,
    repeat: -1,
    ease: Power2.easeOut,
});

TweenMax.to('.collarDeco4',3,{
    x:3,
    y: 6,
    yoyo: true,
    repeat: -1,
    ease: Power2.easeOut,
});

TweenMax.to('.collarDeco5',2,{
    x:5,
    y: 6,
    yoyo: true,
    repeat: -1,
    ease: Power2.easeOut,
});

TweenMax.to('.collarDeco6',2,{
    rotation: 5,
    yoyo: true,
    repeat: -1,
    ease: Expo.easeOut,
});

TweenMax.to('.collarDeco7',2,{
    rotation: 360,
    repeat: -1,
    ease: Power0.easeNone,
});

TweenMax.to('.collarDeco8',3,{
    rotation: 360,
    repeat: -1,
    ease: Power0.easeNone,
});

////////////////////////////////
//footer
TweenMax.staggerTo('.paw', 1, {
    y: 5,
    opacity: 0.7,
    yoyo: true,
    repeat: -1,
    ease: Power2.easeOut,
}, 3);


////////////////////////////////////

