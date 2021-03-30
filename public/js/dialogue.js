let title_dialogue = document.querySelector('.text_dialogue');
const text_dialogue = ["Cela fait bien longtemps que je n'avais pas vu un humain, pas depuis Grozeur. Je suis Veldara Tempest je fait partie des gardiens de ce donjon présente toi humain.", "Enchanté moi c’est Johnny je suis a la recherche d’un statuette"]
let box_dialogue = document.querySelector('.box_dialogue');
let click_dialogue =  document.getElementById("click");
let face_dialogue = document.getElementById("face_dialogue");
click_dialogue.style.display = "none";
let index = 0;
let d = 0;
box_dialogue.addEventListener("click", function () {
    // var touche = event.keyCode;
    // if (touche === 13) {
       
        if (text_dialogue[d].length != title_dialogue.innerHTML.length) {
            index = text_dialogue[d].length;
            click_dialogue.style.display = "block";
        }
        else{
            index = 0;
            d++;
            click_dialogue.style.display = "none";
        }
    
        
    // }
  });

const play = () => {
    title_dialogue.innerHTML = text_dialogue[d].slice(0,index);
    face_dialogue.setAttribute('src', 'public/img/faces/johnny.png');
    index++;

    if (index > text_dialogue[d].Lenght) {
        index = 0;
        
    }

};



let timer = setInterval(play, 80); 

