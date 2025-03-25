import { Component } from '@angular/core';

@Component({
  selector: 'app-call',
  standalone: false,
  
  templateUrl: './call.component.html',
  styleUrl: './call.component.css'
})
export class CallComponent {
  makeCall() {
    window.location.href = 'tel:+911234567890';
  }
}
