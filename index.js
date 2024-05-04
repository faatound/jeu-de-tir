let container = document.querySelector('.container');
let btn = document.querySelector('.start-btn');
let scoreContainer = document.querySelector('.score');
let timeContainer = document.querySelector('.time');

btn.onclick = function() {
    let score = 0;
    let time = 10;
    container.innerHTML="";

    let interval = setInterval(function showTarget(){
        //creation de la cible
        let target = document.createElement('img');
        target.id= "target";
        target.src="silly.png";
        container.appendChild(target);
        target.style.top = Math.random() * (500 
    },1000);

        
    
}