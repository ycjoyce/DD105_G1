//section.intro左下角葉子

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
////////////////////////////////

//div.where

let controller = new ScrollMagic.Controller();

let whereCat = TweenMax.from('#whereCat', 1, {
    y: -100,
    scale: 0.8
});

new ScrollMagic.Scene({
    triggerElement: '#trigger01'
}).setTween(whereCat).addIndicators().addTo(controller);