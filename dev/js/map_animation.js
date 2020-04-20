$(document).ready(function() {
  // ====== TweenMax & ScrollMagic (Lostdog)
  // ------ Dog ------
  var controller = new ScrollMagic.Controller();
  var lostdogDog = TweenMax.to("#lostdogDog", 16, {
    x: -2000,
    y: 300,
    alpha: 0.2
  });
  lostdogDog.delay(0.5);
  new ScrollMagic.Scene({
    triggerElement: "#trigger01"
  })
    .setTween(lostdogDog)
    // .addIndicators()
    .addTo(controller);

  // ------ Girl ------
  var lostdogGirl = TweenMax.to("#lostdogGirl", 3, {
    x: -400
  });
  lostdogGirl.delay(1);
  new ScrollMagic.Scene({
    triggerElement: "#trigger01"
  })
    .setTween(lostdogGirl)
    // .addIndicators()
    .addTo(controller);

  // ------ Hurry Girl ------
  var lostdogGirlSweat = TweenMax.to("#lostdogGirlSweat", 1, {
    alpha: 1
  });
  lostdogGirlSweat.delay(4);
  new ScrollMagic.Scene({
    triggerElement: "#trigger01"
  })
    .setTween(lostdogGirlSweat)
    // .addIndicators()
    .addTo(controller);

  // ====== TweenMax & ScrollMagic (Boy&Dog)
  TweenMax.to(".map_intro_boyndog", 1, {
    y: 5,
    x: 3,
    yoyo: true,
    repeat: -1
  });

  // ====== TweenMax & ScrollMagic (Leaf&Dog)
  TweenMax.to(".map_intro_dog img:nth-child(2)", 1, {
    rotation: 3,
    repeat: -1,
    yoyo: true,
    ease: Power0.easeNone
  });

  // ====== TweenMax & ScrollMagic (Lostdog)
  var controller = new ScrollMagic.Controller();
  // ------ Girl ------

  var t1 = new TimelineMax({
    repeat: -1
  });

  t1.to("#map_hurryGirl", 3, {
    x: 200,
    startAt: { x: -300 },
    // alpha: 1,
    ease: Power0.easeIn
  })
    .to("#map_hurryGirl", 0.5, {
      rotationY: 180
    })
    .to("#map_hurryGirl", 3, {
      x: -300,
      startAt: { x: 200 },
      ease: Power0.easeIn
    })
    .to("#map_hurryGirl", 0.5, {
      rotationY: 0
    });

  t1.delay(1.5);
  new ScrollMagic.Scene({
    triggerElement: "#trigger02"
  })
    .setTween(t1)
    // .addIndicators()
    .addTo(controller);

  // ------ Dog ------

  var t2 = new TimelineMax({
    repeat: -1
  });

  t2.to("#map_hurryDog", 3, {
    x: 280,
    startAt: { x: -120 },
    ease: Power0.easeIn
  })
    .to("#map_hurryDog", 0.5, {
      rotationY: 180
    })
    .to("#map_hurryDog", 3, {
      x: -120,
      ease: Power0.easeIn
    })
    .to("#map_hurryDog", 0.5, {
      rotationY: 0
    });
  // t2.restart(true, false).delay(1.5);

  new ScrollMagic.Scene({
    triggerElement: "#trigger02"
  })
    .setTween(t2)
    // .addIndicators()
    .addTo(controller);

  // ====== TweenMax & ScrollMagic (Lostdog)
  // if (winWidth < 415) {
  //   var t2dog = new TimelineMax({
  //     repeat: -1
  //   });

  //   t2dog.to("#map_hurryDog", 3, {
  //     x: 50,
  //     startAt: { x: 0 },
  //     ease: Power0.easeIn
  //   })
  //     .to("#map_hurryDog", 0.5, {
  //       rotationY: 180
  //     })
  //     .to("#map_hurryDog", 3, {
  //       x: 0,
  //       ease: Power0.easeIn
  //     })
  //     .to("#map_hurryDog", 0.5, {
  //       rotationY: 0
  //     });

  //   var lostdogGirl = TweenMax.to("#lostdogGirl", 5, { x: -100 });
  //   lostdogGirl.delay(0.5);
  //   new ScrollMagic.Scene({
  //     triggerElement: "#trigger01"
  //   })
  //     .setTween(lostdogGirl)
  //     // .addIndicators()
  //     .addTo(controller);
  // }

  // ====== (Dog on map)

  var t3 = new TimelineMax({
    repeat: -1
  });

  t3.to(".mapDog", 2, {
    x: -150,
    y: -15,
    scale: 0.8,
    ease: Power0.easeIn
  })
    .to(".mapDog", 2.5, {
      x: -300,
      y: 15,
      scale: 1.1,
      ease: Power0.easeIn
    })
    .to(".mapDog", 2, {
      x: -450,
      y: 0,
      scale: 1,
      ease: Power0.easeIn
    })
    .to(".mapDog", 1, {
      rotationY: 180
    })
    .to(".mapDog", 2, {
      x: -300,
      y: -15,
      scale: 0.8,
      ease: Power0.easeIn
    })
    .to(".mapDog", 2.5, {
      x: -150,
      y: 15,
      scale: 1.1,
      ease: Power0.easeIn
    })
    .to(".mapDog", 2, {
      x: 0,
      y: 0,
      scale: 1,
      ease: Power0.easeIn
    })
    .to(".mapDog", 1, {
      rotationY: 0
    });

  // TweenMax.to(".mapDog", 1, {
  //   x: -200,
  //   rotation: 3,
  //   repeat: -1,
  //   rotationY: 180
  // });

  // Parallax
  var mapBanner = document.querySelector(".map_banner");
  var parallaxInstance = new Parallax(mapBanner, {
    relativeInput: true
  });

  var mapFootprint = document.querySelector(".map_footprint");
  var parallaxInstance = new Parallax(mapFootprint, {
    relativeInput: true
  });
});
