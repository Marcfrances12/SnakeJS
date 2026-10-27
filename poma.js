

export class poma {

    constructor(cells, poma = 0){
        this.cells = cells
        this.poma = poma
        this.pomaRandom();
        
    }
    get manzana(){
        return this.poma;
    }

    pomaRandom() {
        
        
        this.cells.forEach(cell => cell.classList.remove('apple'));
        
        do {
            this.poma = Math.floor(Math.random() * this.cells.length);
        } while (this.cells[this.poma].classList.contains('snake'));

        this.cells[this.poma].classList.add('apple');
        console.log("Posición poma: " + this.poma);
    }

}