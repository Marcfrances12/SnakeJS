import { Tablero } from "./tablero.js";
import { poma } from "./poma.js";
import { Serp } from "./serp.js";

const tab = new Tablero(10);
const serp = new Serp(tab.getCeldas(), tab.gettamaño());
const manzana = new poma(tab.getCeldas());
const mensaje = document.getElementById('msg');
const record = document.getElementById('puntumax');
const longitud = document.getElementById('logitud');
let longfin = 0;
 

let timerId = null;

function juego() {
    
    if (serp.choca()) {
        clearInterval(timerId);
        mensaje.textContent = "GAME OVER";

        if(localStorage.getItem("Longi") > serp.snake.length){
            console.log("mas pequeño")
        }else{
            localStorage.setItem("Longi", serp.snake.length)
        }
        
        return;
    }

    const come = serp.indice(serp.siguiente()) === manzana.manzana;
    
    serp.move(come);   

        

    if (come) {
        manzana.pomaRandom(); 
        longitud.textContent = "Longitud: " +  serp.snake.length; 
    }
    
    record.textContent = "Record: " + localStorage.getItem("Longi")
    
   
}
const btnReset = document.getElementById('reset-btn');

function reiniciar() {
    clearInterval(timerId);
    timerId = null;

    serp.reiniciar();
    manzana.pomaRandom();   

    mensaje.textContent = "¡Pulsa una flecha para empezar a moverte!";
    longitud.textContent = "Longitud: 1";
    record.textContent = "Record: " + (localStorage.getItem("Longi") ?? 0);

    btnReset.blur();        
}

btnReset.addEventListener('click', reiniciar);


document.addEventListener('keydown', (e) => {
    if (mensaje.textContent.includes("GAME OVER")) return;

    serp.girar(e.key);

    if (!timerId && (e.key.startsWith('Arrow') || ['w', 'a', 's', 'd'].includes(e.key))) {
        mensaje.textContent = "Usa las flechas para moverte";
        timerId = setInterval(juego, 300);
    }
});
