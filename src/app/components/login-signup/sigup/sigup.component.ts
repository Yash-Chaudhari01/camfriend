import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Router } from '@angular/router';  

@Component({
  selector: 'app-sigup',
  standalone: false,
  
  templateUrl: './sigup.component.html',
  styleUrl: './sigup.component.css'
})
export class SigupComponent {
  signupData = {
    fullName: '',
    email: '',
    userType: 'option1',
    password: '',
    address: ''
  };

  constructor( private router: Router) {}

  
  // onSubmit() {
    
  //   this.http.post('http://your-api-endpoint/signup', this.signupData)
  //     .subscribe({
  //       next: (response) => {
  //         console.log('Sign up successful', response);
  //         this.router.navigate(['/login']);  
  //       },
  //       error: (error) => {
  //         console.error('Sign up failed', error);
  //       }
  //     });
  // }

}
