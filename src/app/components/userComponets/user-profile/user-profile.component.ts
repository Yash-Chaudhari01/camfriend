import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: false,
  
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  user = {
    name: 'Yash',
    email: 'yash@gmail.com',
    contact: '12345894818',
    address: 'Jalgaon ,maharshtra ,india',
    rating: 4.5, // Rating out of 5
    imageUrl: 'https://via.placeholder.com/150', // Placeholder for the user image
  };

}
