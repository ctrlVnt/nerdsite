import { Component, OnInit, HostListener } from '@angular/core';
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
import { NavbarComponent } from '../../components/navbar/navbar.component'; 
import { ContactformComponent } from '../../components/contactform/contactform.component'; 
import pubblicationsfile from "../../../assets/text/publications.json"
import linksfile from "../../../assets/text/links.json"
import eventsfile from "../../../assets/text/events.json"
import subjectsfile from "../../../assets/text/subjects.json"
import textfile from "../../../assets/text/testi.json"

interface Publication {
  title: string;
  description: string;
  link: string;
}

interface Events {
  title: string;
  description: string;
  location: string;
}

interface Subjects {
  title: string;
  description: string;
  link: string;
}

interface Links {
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatListModule, MatInputModule, MatFormFieldModule, MatGridListModule, MatDividerModule, MatButtonModule, MatIconModule, MatSidenavModule, MatCardModule, NavbarComponent, ContactformComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class AppComponent{
  title = 'chiarasava';

  aboutme:string = textfile.aboutme;
  
  publications: Publication[] = pubblicationsfile.publications;

  events: Events[] = eventsfile.events;

  subjects: Subjects[] = subjectsfile.subjects;

  links: Links[] = linksfile.links;

  isWindowGreaterThan600 = window.innerWidth > 768;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isWindowGreaterThan600 =  window.innerWidth > 768;
  }

  openSection(sectionId: string){
    const elem = document.getElementById(sectionId);
    if(elem){
      elem.scrollIntoView({behavior: 'smooth'});
    }
  }

  formatAboutMe(aboutme: string): string {
    return aboutme.replace(/(?:\r\n|\r|\n)/g, '<br>');
  }
}
