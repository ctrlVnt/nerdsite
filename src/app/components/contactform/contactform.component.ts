import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [ ReactiveFormsModule, HttpClientModule ],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.css'
})
export class ContactformComponent {
  profileForm = new FormGroup({
    email: new FormControl(''),
    object: new FormControl(''),
    message: new FormControl(''),
  });

  constructor(private http: HttpClient) {}

  onSubmit() {

    console.warn(this.profileForm.value);

    const email = this.profileForm.get('email')?.value as string;
    const object = this.profileForm.get('object')?.value as string;
    const message = this.profileForm.get('message')?.value as string;

    // Check if values are defined before using them
    if (email !== undefined && object !== undefined && message !== undefined) {
      // Prepare the data for the POST request
      const formData = new HttpParams()
        .set('email', email)
        .set('object', object)
        .set('message', message);

      // Make the POST request to Netlify
      this.http.post('/', formData.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }).subscribe(response => {
        console.log(response);
      });
    }
  }
}
