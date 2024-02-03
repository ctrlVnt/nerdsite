import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'; 

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [ ReactiveFormsModule, HttpClientModule, MatButtonModule, MatInputModule ],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.css'
})
export class ContactformComponent {

  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    object: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  constructor(private http: HttpClient) {}

  onSubmit() {

    console.log(this.profileForm.value);

    const formData: any = this.profileForm.value;

    formData['form-name'] = 'contact';

    const headers = new HttpHeaders({
      Accept: 'text/html',
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    this.http
      .post('/', new URLSearchParams(formData).toString(), { headers, responseType: 'text' })
      .subscribe((response) => {
        console.log(response);
      });
  }
}
