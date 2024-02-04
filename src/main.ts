import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/pages/home/home';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

function resetHeight(){
  document.body.style.height = window.innerHeight + "px";
}

window.addEventListener("resize", resetHeight);

resetHeight();