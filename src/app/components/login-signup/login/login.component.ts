import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { Router } from '@angular/router';  




@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
constructor(private http: HttpClient, private router : Router) {

}
login = {
  email:'',
  password:''
  
}
ApiResponse = {

}
submitbtn(){
  
  this.http.post("https://camfriend-1.onrender.com/login",this.login).subscribe((response) => {
    console.log('Sign up successful', response);
    this.router.navigate(['/rentalDeals']);  

  })
}

}
