import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card'; 
import {MatDividerModule} from '@angular/material/divider'; 
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatDividerModule, MatButtonModule, MatIconModule, MatSidenavModule, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('move', [
      state('initial', style({ transform: 'translate(0, 0)' })),
      state('hovered', style({ transform: 'translate(-10%, -10%)' })),
      transition('hovered => initial', animate('300ms ease-out'))
    ])
  ]
})
export class AppComponent {
  title = 'chiarasava';
  images = new Array(10).fill(0);
  currentState: string[] = new Array(this.images.length).fill('initial');

  getRandomPosition(index: number) {
    const gridSize = 4;
    const column = index % gridSize;
    const row = Math.floor(index / gridSize);

    const leftPercentage = (column / (gridSize - 1)) * 70;
    const topPercentage = (row / (gridSize - 1)) * 110;

    return {
      'position': 'absolute',
      'width': '15%',
      'left': `${leftPercentage}%`,
      'top': `${topPercentage}%`,
      'z-index': '0'
    };
  }

  onMouseEnter(index: number) {
    this.currentState[index] = 'hovered';
  }

  onMouseLeave(index: number) {
    this.currentState[index] = 'initial';
  }
}
