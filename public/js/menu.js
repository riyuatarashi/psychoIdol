let perso = document.querySelector('.actor');
let menu = document.querySelector('.menu');
let corp = document.querySelector('.corp');
let back = document.querySelector('.back');
let game = document.querySelector('.game');
let main_menu = document.querySelector('.main_menu');

setTimeout(function () {
    perso.classList.add('spawn');
  }, 200);
  setTimeout(function () {
    perso.classList.add('floater');
  }, 1900);



 
document.querySelector('#play').addEventListener('click', function() {
    var player = document.getElementById('new');

    player.play();

    flash();
    setTimeout(bye, 500);

});
document.querySelector('#again').addEventListener('click', function() {
    var player = document.getElementById('resume');
    player.play();

    menu.classList.add('min');

    setTimeout(function () {
        while( menu.firstChild) {
            menu.removeChild(menu.firstChild);
        }
        menu.classList.remove('min'); 
        affsave(menu);
      }, 1500);
      
});
document.querySelector('#top').addEventListener('click', function() {
    var player = document.getElementById('score');

    player.play();
});
 

let butsound = document.querySelector('.sound');
let logo = document.querySelector('.sound i');

butsound.addEventListener('click', function() {
    let sound = document.querySelector('#sound');
    
   if (sound.paused === false) {
        sound.pause();
        logo.classList.remove("fa-volume-up")
        logo.classList.add("fa-volume-mute")
   }
   else{
        sound.play();
        logo.classList.remove("fa-volume-mute")
        logo.classList.add("fa-volume-up")
   }
   
});

function flash() {
    let flash = document.createElement('div');
    flash.style.position = 'absolute';
    flash.style.width = "100%";
    flash.style.height = "100%";
    flash.style.top = "0";
    flash.style.left = "0";
    flash.style.background = "white";
    flash.classList.add('flash');
    corp.appendChild(flash);
    setTimeout(function () {
        corp.removeChild(flash);
      }, 500);
}

function bye() {
  corp.classList.add("bye");
  setTimeout(function () {
    back.classList.add("zoom");
  }, 3000);
  setTimeout(function () {
    back.parentNode.removeChild(back);
    main_menu.style.display = "none";
    game.style.display="block";
    game.classList.add('aff_display');
  }, 5000);

}