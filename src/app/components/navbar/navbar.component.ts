import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'; 

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  openSection(sectionId: string){
    const elem = document.getElementById(sectionId);
    if(elem){
      elem.scrollIntoView({behavior: 'smooth'});
    }
  }
}
