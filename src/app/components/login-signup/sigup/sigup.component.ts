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

  constructor( private router: Router,private http:HttpClient) {}
  
  signupData = {
    fullName: '',
    email: '',
    userType: '',
    password_hash: '',
    address: ''
  };
  
  
  onSignup() {
    
    this.http.post('https://camfriend-1.onrender.com/users', this.signupData)
      .subscribe({
        next: (response) => {
          console.log('Sign up successful', response);
          this.router.navigate(['/rentalDeals']);  
        },
        error: (error) => {
          console.error('Sign up failed', error);
        }
      });
  }

}
