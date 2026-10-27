export class Tablero {
    constructor(tamaño = 20 ){
        this.tamaño = tamaño;
        this.cells = [];
        this.tablero(this.tamaño);
    }

    getCeldas(){
        return this.cells;
    }

    gettamaño(){
        return this.tamaño;
    }
    

    tablero(tamaño){

        // this.columnas = columna;
        // this.filas = fila;
        this.tamaño = tamaño;

        
        const grid = document.getElementById('grid');
        
         grid.innerHTML = '';
        
        grid.style.setProperty('--tamaño', this.tamaño);

        const totalcells = this.tamaño * this.tamaño;

        for (let i = 0; i < totalcells; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            grid.appendChild(cell);
            this.cells.push(cell);
        }
    }
}








