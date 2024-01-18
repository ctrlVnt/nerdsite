import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card'; 
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatInputModule, MatFormFieldModule, MatGridListModule, MatDividerModule, MatButtonModule, MatIconModule, MatSidenavModule, MatCardModule],
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

  cards = [
    { content: 'Simple card 1' },
    { content: 'Simple card 2' },
    { content: 'Simple card 3' },
    { content: 'Simple card 4' },
    { content: 'Simple card 5' },
    { content: 'Simple card 6' },
    { content: 'Simple card 7' },
    { content: 'Simple card 8' },
];

subjects = [
  { content: 'Simple card 1' },
  { content: 'Simple card 2' },
  { content: 'Simple card 3' },
  { content: 'Simple card 4' },
  { content: 'Simple card 5' },
  { content: 'Simple card 6' },
  { content: 'Simple card 7' },
  { content: 'Simple card 8' },
];
  
  openSection(sectionId: string){
    const elem = document.getElementById(sectionId);
    if(elem){
      elem.scrollIntoView({behavior: 'smooth'});
    }
  }
}
