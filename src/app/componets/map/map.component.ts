import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: false,
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit, OnDestroy {
  private map: any;
  private marker: any;
  private polyline: any;
  private watchId?: number;
  private path: any[] = [];
  title = 'AIMERS Safety Tracker';
  
  // Default coordinates (India)
  private defaultLat = 20.5937;
  private defaultLng = 78.9629;
  isTracking = false;
  emergencyMode = false;
  pathCoordinates: {lat: number, lng: number}[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initMap();
    }
  }

  private async initMap(): Promise<void> {
    const L = await import('leaflet');
    
    this.map = L.map('map').setView([this.defaultLat, this.defaultLng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    // Initialize marker
    this.marker = L.marker([this.defaultLat, this.defaultLng]).addTo(this.map)
      .bindPopup('Your location')
      .openPopup();

    // Initialize polyline
    this.polyline = L.polyline([], {color: 'blue'}).addTo(this.map);
  }

  startTracking(): void {
    if (!isPlatformBrowser(this.platformId) || this.isTracking) return;
    
    this.isTracking = true;
    if (navigator.geolocation) {
      this.watchId = navigator.geolocation.watchPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          
          // Update marker position
          this.marker.setLatLng([lat, lng]);
          this.map.setView([lat, lng]);
          
          // Add to path
          this.path.push([lat, lng]);
          this.pathCoordinates.push({lat, lng});
          this.polyline.setLatLngs(this.path);
        },
        (error) => {
          console.error('Geolocation error:', error);
        },
        { enableHighAccuracy: true }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  stopTracking(): void {
    if (this.watchId) {
      navigator.geolocation.clearWatch(this.watchId);
      this.isTracking = false;
    }
  }

  triggerEmergency(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    this.emergencyMode = true;
    if (this.path.length > 0) {
      const lastLocation = this.path[this.path.length - 1];
      // alert(`EMERGENCY ALERT SENT!\nLat: ${lastLocation[0].toFixed(6)}\nLng: ${lastLocation[1].toFixed(6)}`);
      
      // Visual indication
      const L = require('leaflet');
      L.circleMarker(lastLocation, {
        radius: 10,
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5
      }).addTo(this.map)
        .bindPopup('Emergency!')
        .openPopup();
    }
  }

  resetEmergency(): void {
    this.emergencyMode = false;
  }

  clearPath(): void {
    this.path = [];
    this.pathCoordinates = [];
    this.polyline.setLatLngs(this.path);
  }

  centerMap(): void {
    if (this.path.length > 0) {
      const lastLocation = this.path[this.path.length - 1];
      this.map.setView(lastLocation, 17);
    }
  }

  ngOnDestroy(): void {
    this.stopTracking();
  }
}