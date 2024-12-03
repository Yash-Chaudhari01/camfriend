import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../common/shared.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  standalone: false,
  
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  location: { latitude: number; longitude: number } | null = null;
  errorMessage: string | null = null;
  searchData:any = {
    location:""
  }
constructor(private router: Router,private sharedService:SharedService , private http : HttpClient){

}
  ngOnInit(): void {
    this.getCurrentLocation();
  }
  searchClick(){
    if(this.sharedService.isLoggedIn){
      this.sharedService.setLocation(this.location)
      this.router.navigate(['/list'])
    }else{
      this.router.navigate(['/login'])
    }
  }
  getCurrentLocation(): void {
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          console.log("position is ",position);
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              this.errorMessage = 'User denied the request for Geolocation.';
              break;
            case error.POSITION_UNAVAILABLE:
              this.errorMessage = 'Location information is unavailable.';
              break;
            case error.TIMEOUT:
              this.errorMessage = 'The request to get user location timed out.';
              break;
            default:
              this.errorMessage = 'An unknown error occurred.';
          }
        }
      );
    } else {
      this.errorMessage = 'Geolocation is not supported by this browser.';
    }
  }


}
