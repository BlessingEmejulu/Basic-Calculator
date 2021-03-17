self.addEventListener('load', ()=>{
'use strict';
let palette = document.querySelector('.color-palette');
let specialKeys = document.querySelectorAll(".color-key");
    palette.addEventListener("click", function() {
        /*select random colors*/
let colors = ['crimson', 'forestgreen','navy','deeppink','purple', 'orangeRed','darkviolet'];
let randomColors = parseInt(Math.random()*colors.length);
this.style.color = colors[randomColors];
specialKeys[0].style.background = colors[randomColors];
specialKeys[1].style.background = colors[randomColors];
specialKeys[2].style.background = colors[randomColors];
specialKeys[3].style.background = colors[randomColors];
specialKeys[4].style.background = colors[randomColors];
specialKeys[5].style.background = colors[randomColors];
specialKeys[6].style.background = colors[randomColors];
specialKeys[7].style.background = colors[randomColors];
specialKeys[8].style.background = colors[randomColors];
specialKeys[9].style.background = colors[randomColors];
specialKeys[10].style.background = colors[randomColors];
    })
    return 0;
});