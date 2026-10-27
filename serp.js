export class Serp {
    constructor(cells, tamaño, snake = [{ x: 4, y: 4 }], dirX = 0, dirY = 0) {
        this.cells = cells;
        this.tamaño = tamaño;
        this.snake = snake;
        this.dirX = dirX;
        this.dirY = dirY;
        this.bloqueado = false;
        this.cells[this.indice(snake[0])].classList.add('snake', 'head');
    }

    indice(p) {
        return p.y * this.tamaño + p.x;
    }

    siguiente() {
        const head = this.snake[0];
        return { x: head.x + this.dirX, y: head.y + this.dirY };
    }

    girar(key) {
        if (this.bloqueado) return;

        let nx = this.dirX;
        let ny = this.dirY;

        if ((key === 'ArrowRight' || key === 'd') && this.dirX !== -1) {
            nx = 1; ny = 0;
        } else if ((key === 'ArrowLeft' || key === 'a') && this.dirX !== 1) {
            nx = -1; ny = 0;
        } else if ((key === 'ArrowUp' || key === 'w') && this.dirY !== 1) {
            nx = 0; ny = -1;
        } else if ((key === 'ArrowDown' || key === 's') && this.dirY !== -1) {
            nx = 0; ny = 1;
        }

        if (nx !== this.dirX || ny !== this.dirY) {
            this.dirX = nx;
            this.dirY = ny;
            this.bloqueado = true;
        }
    }

    choca() {
        const next = this.siguiente();
        if (next.x < 0 || next.x >= this.tamaño || next.y < 0 || next.y >= this.tamaño) {
            return true;
        }
        
        return this.snake.some(p => p.x === next.x && p.y === next.y);
    }

    move(crece) {
        this.bloqueado = false;
        this.cells[this.indice(this.snake[0])].classList.remove('head');

        const newHead = this.siguiente();
        this.snake.unshift(newHead);
        this.cells[this.indice(newHead)].classList.add('snake', 'head');

        if (!crece) {
            const tail = this.snake.pop();
            this.cells[this.indice(tail)].classList.remove('snake');
        }
    }

    reiniciar() {
        this.cells.forEach(c => c.classList.remove('snake', 'head'));
        this.snake = [{ x: 4, y: 4 }];
        this.dirX = 0;
        this.dirY = 0;
        this.bloqueado = false;
        this.cells[this.indice(this.snake[0])].classList.add('snake', 'head');
    }
}