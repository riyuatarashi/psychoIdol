let title_dialogue = document.querySelector('.text_dialogue');


const text_dialogue = tableauJS;
let box_dialogue = document.querySelector('.box_dialogue');
let click_dialogue =  document.getElementById("click");
let face_dialogue = document.getElementById("face_dialogue");
click_dialogue.style.display = "none";
let index = 0;
let d = 0;
let face_perso = "";
box_dialogue.addEventListener("click", function () {
    // var touche = event.keyCode;
    // if (touche === 13) {
       
        if (text_dialogue[d].content.length != title_dialogue.innerHTML.length) {
            index = text_dialogue[d].content.length;
            click_dialogue.style.display = "block";
            console.log(text_dialogue[d].content.length);
            console.log(title_dialogue.innerHTML.length);
        }
        else{
            index = 0;
            d++;
            click_dialogue.style.display = "none";
        }
    
        
    // }
  });

const play = () => {
    brand();
    dispayface();
    title_dialogue.innerHTML = text_dialogue[d].content.slice(0,index);
    face_dialogue.setAttribute('src', 'public/img/' + face_perso);
    index++;

    if (index > text_dialogue[d].content.Lenght) {
        index = 0;
        
    }

};

function dispayface(){
    if (text_dialogue[d].name == "johnny") {
        face_perso = "faces/johnny.png";
    }
    else if (text_dialogue[d].name == "veldara") {
        face_perso = "enemies/Dragon.png";
    }
    else{
        face_perso = "";
    }
}

function brand() {
    if (text_dialogue[d].brand == 1 ) {
        box_dialogue.style.display = "none";
        face_dialogue.style.display = "none";
    }
}

let timer = setInterval(play, 80); 

