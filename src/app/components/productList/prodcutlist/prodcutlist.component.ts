import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prodcutlist',
  standalone: false,
  
  templateUrl: './prodcutlist.component.html',
  styleUrl: './prodcutlist.component.css'
})
export class ProdcutlistComponent {
  
  constructor(private router: Router) {}

  userClick(){
    this.router.navigate(['/profileDetails'])
  }
  products = [
    {
      name: 'Camera A',
      image: 'https://via.placeholder.com/200',
      availableFrom: '2024-12-01',
      availableTill: '2024-12-15',
    },
    {
      name: 'Camera B',
      image: 'https://via.placeholder.com/200',
      availableFrom: '2024-12-05',
      availableTill: '2024-12-20',
    },
    {
      name: 'Lens X',
      image: 'https://via.placeholder.com/200',
      availableFrom: '2024-11-25',
      availableTill: '2024-12-10',
    },
    
    {
      name: 'Camera B',
      image: 'https://via.placeholder.com/200',
      availableFrom: '2024-12-05',
      availableTill: '2024-12-20',
    },
    {
      name: 'Camera B',
      image: 'https://via.placeholder.com/200',
      availableFrom: '2024-12-05',
      availableTill: '2024-12-20',
    },
    {
      name: 'Camera B',
      image: 'https://via.placeholder.com/200',
      availableFrom: '2024-12-05',
      availableTill: '2024-12-20',
    },
    {
      name: 'Camera B',
      image: 'https://via.placeholder.com/200',
      availableFrom: '2024-12-05',
      availableTill: '2024-12-20',
    },
    {
      name: 'Camera B',
      image: 'https://via.placeholder.com/200',
      availableFrom: '2024-12-05',
      availableTill: '2024-12-20',
    },
    {
      name: 'Camera B',
      image: 'https://via.placeholder.com/200',
      availableFrom: '2024-12-05',
      availableTill: '2024-12-20',
    },
    {
      name: 'Camera B',
      image: 'https://via.placeholder.com/200',
      availableFrom: '2024-12-05',
      availableTill: '2024-12-20',
    },
    {
      name: 'Camera B',
      image: 'https://via.placeholder.com/200',
      availableFrom: '2024-12-05',
      availableTill: '2024-12-20',
    },
    {
      name: 'Camera B',
      image: 'https://via.placeholder.com/200',
      availableFrom: '2024-12-05',
      availableTill: '2024-12-20',
    }
  ];

}
