import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: false,
  
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  location: { latitude: number; longitude: number } | null = null;
  errorMessage: string | null = null;
constructor(private router: Router){

}
  ngOnInit(): void {
    this.getCurrentLocation();
  }
  searchClick(){
    this.router.navigate(['/list'])
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
