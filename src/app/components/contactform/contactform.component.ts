import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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

      // Make the POST request to Netlify
      /*this.http.post('/', formData.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }).subscribe(response => {
        console.log(response);
      });
    }
  }*/
}
