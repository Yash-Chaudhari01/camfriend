import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notification',
  standalone: false,
  
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})



export class NotificationComponent {
  // constructor(private http: HttpClient) {}

  unreadCount:number=3;
  markAll(){
   this. unreadCount=0;
  }
  read(){
    this.unreadCount--;
  }

  isDropdownOpen:boolean=false;
  notifications=
  [
    {
      "id": 1,
      "userId": "user123",
      "message": "Your booking request has been approved.",
      "isRead": false,
      "timestamp": "2024-12-01T10:30:00Z"
    },
    {
      "id": 2,
      "userId": "user123",
      "message": "A new project has been listed near your location.",
      "isRead": false,
      "timestamp": "2024-12-01T09:45:00Z"
    },
   
    {
      "id": 4,
      "userId": "user123",
      "message": "New updates are available for your dashboard.",
      "isRead": false,
      "timestamp": "2024-12-01T08:00:00Z"
    }
  ]
  iconClick(){
    this.isDropdownOpen=!this.isDropdownOpen;
  } 
}
