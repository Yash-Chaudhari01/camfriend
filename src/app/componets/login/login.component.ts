import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  selectedCountryCode: string = '+91';
  mobileNumber: string = '';
  showOtp: boolean = false;
  otp: string[] = new Array(6).fill('');
  countdown: number = 30;
  otpBoxes = new Array(6);
  maskedNumber: string = '';

  sendOtp() {
    if (this.mobileNumber.length < 10) {
      alert('Please enter a valid mobile number');
      return;
    }
    
    this.maskedNumber = this.mobileNumber.slice(-4);  // Mask the number
    this.showOtp = true;

    // Call API to send OTP
    console.log(`Sending OTP to ${this.selectedCountryCode} ${this.mobileNumber}`);
  }

  verifyOtp() {
    const enteredOtp = this.otp.join('');  // Combine OTP inputs into one string
    console.log(`Verifying OTP: ${enteredOtp}`);

    // Call API to verify OTP
    if (enteredOtp.length === 6) {
      alert('OTP Verified Successfully!');
    } else {
      alert('Please enter a valid 6-digit OTP');
    }
  }

  resendOtp() {
    this.countdown = 30;
    this.sendOtp();
  }
}
