imagesLoaded( '#coidea', { background: true }, function() {

    // variables
    var loader = document.querySelector('.loader'),
        header = document.querySelector('header'),
        footer = document.querySelector('footer'),
        section = document.querySelectorAll('section'),
        boxes = document.querySelector('.wrapper'),
        boxesWidth = boxes.querySelector('.bcg').offsetWidth + 'px',
        items = Array.prototype.slice.call(document.querySelectorAll(".wrapper")),
        anchorNav = document.querySelector('.anchor-nav')
        self = this,
        controller = new ScrollMagic.Controller(),
        scrollController = new ScrollMagic.Controller(),
        scenes = {
            'scene1': { 'section-1': 'anchor1' },
            'scene2': { 'section-2': 'anchor2' },
            'scene3': { 'section-3': 'anchor3' },
            'scene4': { 'section-4': 'anchor4' }
        };


    // hide 
    loader.classList.add('is-loaded');
    
    // demo
    CSSPlugin.defaultForce3D = false

    // controller with "flying in" & "flying out" animations
    items.forEach(function(self) {
      var sceneTimelineIn = new TimelineMax(),
          sceneTimelineOut = new TimelineMax();
      
      sceneTimelineIn
        .fromTo(self.querySelector('.bcg'), 1.4, { autoAlpha: 0, y: 360 }, { autoAlpha: 1, y: 0, ease: Cubic.easeInOut });
      sceneTimelineOut
        .fromTo(self.querySelector('.bcg'), 1.4, { autoAlpha: 1, y: 0}, { autoAlpha: 0, y: -360, ease: Cubic.easeInOut }, '+=0.3');

      var sceneIn = new ScrollMagic.Scene({
        triggerElement: self, triggerHook: "onEnter", duration: Math.max(document.documentElement.clientHeight, window.innerHeight || 0), offset: 64 })
        .setTween(sceneTimelineIn)
        .addTo(controller);

      var sceneOut = new ScrollMagic.Scene({
        triggerElement: self, triggerHook: "onLeave", duration: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 2, offset: 64 })
        .setTween(sceneTimelineOut)
        .addTo(controller);
    });


    // next/prev section
    scrollController = new ScrollMagic.Controller({ 
      globalSceneOptions: { duration: document.getElementById('section-1').clientHeight, triggerHook: .025, reverse: true } 
    });
    
    
    // skip loop if the property is from prototype & skip loop if the property is from prototype
    for(var key in scenes) {
      if (!scenes.hasOwnProperty(key)) continue;
      var obj = scenes[key];
      for (var prop in obj) {
        if(!obj.hasOwnProperty(prop)) continue;
        new ScrollMagic.Scene({ triggerElement: '#' + prop })
          .setClassToggle('#' + obj[prop], 'active')
          .addTo(scrollController);
      }
    }


    // Change behaviour of controller to animate scroll instead of jump
    scrollController.scrollTo(function(target) {
      TweenMax.to(window, 20, { scrollTo : { y : target, autoKill : true }, ease : Cubic.easeInOut });
    });


    //  Bind scroll to anchor links using Vanilla JavaScript
    anchorNav.addEventListener('click', function(e) {
    
      var target = e.target,
          id     = target.getAttribute('href'),
          dataId = parseInt(target.getAttribute('data-active'))

      if(id !== null) {
        if(id.length > 0) {
          e.preventDefault();
          scrollController.scrollTo(id);

          if(window.history && window.history.pushState) {
            history.pushState("", document.title, id);
          }
        }
      }
    });
    
    
    // Loop through nodelist, just like an array & Pass in box element and index to createBoxAnimation function
    for (var i = 0; i < section.length; i++) {
      createBoxAnimation(section[i], i);
    }

    function createBoxAnimation(box, index) {

      var tooltipSelector = ".section-" + (index + 1),
          showTimeline = new TimelineMax({ reversed: true });
          
      showTimeline
        .set(box.querySelector('.bcg'), { force3D:true })
        .set(box.querySelector('.content'), { className: '+=active' })
        .to(box.querySelector('.bg'), 1, { height: "100%", marginTop: '0', ease: Cubic.easeInOut })
        .to(box.querySelector('.bcg'), 1.2, { maxWidth: "100%", ease: Cubic.easeInOut }, '-=0.7')
        .to(box.querySelector('span'), 1, { fontSize: "64px", letterSpacing: '0px', ease: Cubic.easeInOut }, '-=0.7')
        .to(box.querySelector('.description'), 0.7, { autoAlpha: 1, height: 260, y: -48, ease: Cubic.easeInOut }, '-=0.7')
      
      // click to (de)activate fullscreen detail view
      box.addEventListener("click", function() {
        header.classList.toggle('active-header');
        footer.classList.toggle('active-footer');
        showTimeline.reversed(!showTimeline.reversed());
      });
    }

  });

  // fast fix for resize window and refresh view, attention: not use in production, only for demo purposes!
  (function () {
  var width = window.innerWidth;

  window.addEventListener('resize', function () {
    if (window.innerWidth !== width) {
      window.location.reload(true);
    }
  });
  })();