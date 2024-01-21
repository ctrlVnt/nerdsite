import { Component, OnInit } from '@angular/core';
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
import {MatListModule} from '@angular/material/list'; 
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatListModule, MatInputModule, MatFormFieldModule, MatGridListModule, MatDividerModule, MatButtonModule, MatIconModule, MatSidenavModule, MatCardModule],
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
export class AppComponent implements OnInit {
  title = 'chiarasava';
  breakpoint: number = 1;
  constructor() { }
  
  pubblications = [
    { content: [
      'Titolo 1',
      'descrizione 1',
      'link 1'
    ]},
    { content: [
      'Titolo 2',
      'descrizione 2',
      'link 2'
    ]},
    { content: [
      'Titolo 3',
      'descrizione 3',
      'link 3'
    ]},
    { content: [
      'Titolo 4',
      'descrizione 4',
      'link 4'
    ]},
    { content: [
      'Titolo 5',
      'descrizione 5',
      'link 5'
    ]},
    { content: [
      'Titolo 6',
      'descrizione 6',
      'link 6'
    ]}
];

upcoming_talks = [
  { content: [
    'Ciao sono...',
    'kjhdbjksbldbckljvn',
    'Ver'
  ]}
];

passed_talks = [
  { content: [
    'saasdsd',
    'dadcas',
    'NA'
  ]},
  { content: [
    'Titolo aaaaa 2',
    'descrizione aaaaa 2',
    'TO'
  ]},
  { content: [
    'sdacasdac',
    'sdcascd',
    'PZ'
  ]}
];

subjects = [
  { content: [
    'Titolo subject 1',
    'descrizione subject 1',
    'link subject 1'
  ]},
  { content: [
    'Titolo subject 2',
    'descrizione subject 2',
    'link subject 2'
  ]},
  { content: [
    'Titolo subject 3',
    'descrizione subject 3',
    'link subject 3'
  ]},
  { content: [
    'Titolo subject 4',
    'descrizione subject 4',
    'link subject 4'
  ]},
  { content: [
    'Titolo subject 5',
    'descrizione subject 5',
    'link subject 5'
  ]}
];
  
links = [
  { content: [
    'Titolo subject 1',
    'descrizione subject 1',
    'link subject 1'
  ]},
  { content: [
    'Titolo subject 2',
    'descrizione subject 2',
    'link subject 2'
  ]},
  { content: [
    'Titolo subject 3',
    'descrizione subject 3',
    'link subject 3'
  ]},
  { content: [
    'Titolo subject 4',
    'descrizione subject 4',
    'link subject 4'
  ]}
];

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 3;
  }

  onResize(event: Event) {
    this.breakpoint = ((event.target as Window).innerWidth <= 600) ? 1 : 3;
  }

  openSection(sectionId: string){
    const elem = document.getElementById(sectionId);
    if(elem){
      elem.scrollIntoView({behavior: 'smooth'});
    }
  }
}
