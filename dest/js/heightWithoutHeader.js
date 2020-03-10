'use strict';

function sectionHeight() {
    var header = document.querySelector('nav');
    var section = document.querySelector('section');
    section.style.height = window.innerHeight - header.offsetHeight + "px";
}