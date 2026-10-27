# Snake JS

Un clásico juego de la serpiente hecho con JavaScript vanilla, HTML y CSS.

## Cómo jugar

- Usa las **flechas del teclado** o **WASD** para mover la serpiente.
- Come las manzanas para crecer.
- Evita chocar con las paredes o con tu propia cola.

## Arquitectura

El proyecto está dividido en módulos independientes:

| Archivo | Responsabilidad |
|---|---|
| `index.html` | Estructura principal y carga de estilos/scripts |
| `juego.js` | Orquestador: game loop, detección de colisiones, entrada del usuario |
| `tablero.js` | Construye la cuadrícula del tablero dinámicamente |
| `serp.js` | Lógica de la serpiente: movimiento, giro, colisiones |
| `poma.js` | Genera la manzana en posiciones aleatorias válidas |
| `juego.css` | Estilos visuales retro pixel-art |

## Para iniciarlo

Abre una terminal en la carpeta del proyecto y ejecuta:

```
python -m http.server 8000
```

Luego abre tu navegador en `http://localhost:8000`.
