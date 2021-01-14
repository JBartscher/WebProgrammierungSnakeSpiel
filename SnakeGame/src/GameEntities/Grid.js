"use strict";

import Game from "../Game.js";

export default class Grid {

    /**
     * draw a grid on the canvas.
     */
    static drawGrid() {

        const game = new Game(); // game singleton

        let ctx = game.context;

        let s = 32;
        let pL = s;
        let pT = s;
        let pR = s;
        let pB = s;

        ctx.strokeStyle = 'lightgrey'

        ctx.beginPath()
        for (let x = pL; x <= game.canvas.width - pR; x += s) {
            ctx.moveTo(x, pT)
            ctx.lineTo(x, game.canvas.height - pB)
        }
        for (let y = pT; y <= game.canvas.height - pB; y += s) {
            ctx.moveTo(pL, y)
            ctx.lineTo(game.canvas.width - pR, y)
        }
        ctx.stroke()
    }

    /**
     * draw a grid on the canvas with respect to the space which is needed to draw walls.
     *
     * If this method has a negative impact on performance, one can delete it and change the order
     * of the draw calls so that the grid is drawn before the GameObjects.
     * This way the walls will be drawn over the grid.
     */
    static drawGridWithoutWalls() {

        const game = new Game(); // game singleton

        let ctx = game.context;

        let s = 32;
        let pL = s;
        let pT = s;
        let pR = s;
        //let pB = s;

        ctx.strokeStyle = 'lightgrey'

        ctx.beginPath()
        for (let x = pL; x <= game.canvas.width - pR; x += s) {
            ctx.moveTo(x, 0)
            ctx.lineTo(x, game.canvas.height)
        }
        for (let y = pT; y <= game.canvas.height; y += s) {
            ctx.moveTo(0, y)
            ctx.lineTo(game.canvas.width, y)
        }
        ctx.stroke()
    }

}