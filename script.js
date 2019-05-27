'use strict';

const preview = document.getElementById('preview');
const mainImg = document.getElementById('mainImg');

preview.addEventListener('click', function(event) {
    event.preventDefault();
    let target = event.target.parentNode;
    mainImg.src = target.href;
});
