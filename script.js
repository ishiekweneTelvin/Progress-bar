 const progress = document.querySelector(".progress-done");


 
 let widthNuber = Math.floor(Math.random()*100 )
 console.log(widthNuber);
 progress.style.width = widthNuber +'%';


 progress.style.opacity = 1;
progress.innerHTML = widthNuber + '%';