import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  standalone: false,
  
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  testimonials = [
    {
      image: 'https://via.placeholder.com/60',
      rating: '5.0',
      feedback: 'best rental service application',
      name: 'Yash Chaudhari',
      location: 'jalgaon ,india'
    },
    {
      image: 'https://via.placeholder.com/60',
      rating: '5.0',
      feedback: 'best rental service application',
      name: 'Yash Chaudhari',
      location: 'jalgaon ,india'
    },
    {
      image: 'https://via.placeholder.com/60',
      rating: '5.0',
      feedback: 'best rental service application',
      name: 'Yash Chaudhari',
      location: 'jalgaon ,india'
    },
    {
      image: 'https://via.placeholder.com/60',
      rating: '5.0',
      feedback: 'best rental service application',
      name: 'Yash Chaudhari',
      location: 'jalgaon ,india'
    },
    {
      image: 'https://via.placeholder.com/60',
      rating: '5.0',
      feedback: 'best rental service application',
      name: 'Yash Chaudhari',
      location: 'jalgaon ,india'
    },
    {
      image: 'https://via.placeholder.com/60',
      rating: '5.0',
      feedback: 'best rental service application',
      name: 'Yash Chaudhari',
      location: 'jalgaon ,india'
    }
  ];

  scrollInterval: any;

  ngAfterViewInit(): void {
    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
    }
  }

  startAutoScroll(): void {
    const scrollContainer = document.querySelector('.testimonial-cards') as HTMLElement;

    this.scrollInterval = setInterval(() => {
      if (scrollContainer) {
        const scrollAmount = scrollContainer.scrollLeft + scrollContainer.offsetWidth; // Move by the width of visible area (3 cards)
        if (scrollAmount >= scrollContainer.scrollWidth) {
          scrollContainer.scrollLeft = 0; // Reset to the beginning
        } else {
          scrollContainer.scrollLeft += scrollContainer.offsetWidth; // Scroll by container width
        }
      }
    }, 3000); // Adjust auto-scroll speed
  }

}
