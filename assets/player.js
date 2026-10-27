"use strict";
const image=document.getElementById("sign"),button=document.getElementById("toggle"),status=document.getElementById("status");
let playing=true;
function setPlaying(value){playing=value;image.src=playing?image.dataset.gif:image.dataset.poster;button.textContent=playing?"Aturar":"Reproduir";button.setAttribute("aria-label",playing?"Aturar l’animació":"Reproduir l’animació");status.textContent=playing?"Animació en reproducció":"Animació aturada";}
setPlaying(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
button.addEventListener("click",()=>setPlaying(!playing));
