let btn = document.querySelector('.btn');
let img = document.querySelector('.image');


btn.addEventListener('mouseover', ()=>{
    img.style.background = "linear-gradient( hsl(4, 100%, 67%), hsl(349.09,92.18%,64.9%))";
})

btn.addEventListener('mouseout', ()=>{
    img.style.background = "white";
})