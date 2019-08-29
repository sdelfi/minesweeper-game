import { Component } from '@angular/core';
import { Board } from './game/board';
import { Cell } from './game/cell';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'minesweeper-game';
  board: Board;

  constructor() {
    this.resetGame();
  }

  checkCell(cell: Cell) {
    const result = this.board.checkCell(cell);
    if (result === 'gameover') {
      alert('You lose');
    } else if (result === 'win') {
      alert('You win');
    }
  }

  flagCell(cell: Cell) {
    this.board.flagCell(cell);
  }

  resetGame() {
    this.board = new Board(10, 20);
  }
}
