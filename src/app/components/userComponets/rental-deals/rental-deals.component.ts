import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-rental-deals',
  standalone: false,
  
  templateUrl: './rental-deals.component.html',
  styleUrl: './rental-deals.component.css'
})
export class RentalDealsComponent {
constructor(private router:Router,private zone: NgZone){

}
isLoading = false;
apiResponse:any = [];
data :any
//  
ngOnInit() {
  fetch('https://camfriend-1.onrender.com/equipment')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      this.zone.run(() => {
        this.isLoading = true;
        this.apiResponse = data;
        console.log('API Response:', this.apiResponse);
      });
    })
    .catch((error) => {
      console.error('Fetch error:', error);
    });
}


//   apiResponse = [
//   {
//     equipment_id: "5bec9ee5-7c3c-4d76-bcba-552183b4aca8",
//     name: "canon 200d mark ii",
//     description: "beginner friendly camera",
//     price_per_day: 800,
//     is_available: true,
//     condition: "New",
//     image_urls: [
//       "https://in.canon/media/image/2019/04/09/964474e1548546c297cd03c08a3175e6_EOS+200D+MKII+BK+Front.png"
//     ],
//     createdAt: "2024-11-30T19:53:52.000Z",
//     updatedAt: "2024-12-01T19:54:02.000Z",
//     category_id: "5bec9ee5-7c3c-4d76-bcba-552183b4aca8"
//   },
//   {
//     equipment_id: "f98e1f67-62fb-4bc1-a76a-df63c555e40a",
//     name: "Nikon pos 5D Mark IV",
//     description: "A high-end DSLR camera for professional photographers.",
//     price_per_day: 150,
//     is_available: true,
//     condition: "new",
//     image_urls: [
// "https://th.bing.com/th/id/OIP.xVyeUgZMOuu_idL8y3sxQwHaHa?w=189&h=189&c=7&r=0&o=5&dpr=1.6&pid=1.7"    ],
//     createdAt: "2024-12-01T19:57:42.280Z",
//     updatedAt: "2024-12-01T19:57:42.280Z",
//     category_id: "5bec9ee5-7c3c-4d76-bcba-552183b4aca8"
//   },
//   {
//     equipment_id: "f98e1f67-62fb-4bc1-a76a-df63c555e40a",
//     name: "Nikon TDS 5D Mark IV",
//     description: "A high-end DSLR camera for professional photographers.",
//     price_per_day: 2000,
//     is_available: true,
//     condition: "new",
//     image_urls: [
// "https://th.bing.com/th/id/OIP.xVyeUgZMOuu_idL8y3sxQwHaHa?w=189&h=189&c=7&r=0&o=5&dpr=1.6&pid=1.7"    ],
//     createdAt: "2024-12-01T19:57:42.280Z",
//     updatedAt: "2024-12-01T19:57:42.280Z",
//     category_id: "5bec9ee5-7c3c-4d76-bcba-552183b4aca8"
//   },
//   {
//     equipment_id: "f98e1f67-62fb-4bc1-a76a-df63c555e40a",
//     name: "Canon EOS 5D Mark IV",
//     description: "A high-end DSLR camera for professional photographers.",
//     price_per_day: 100,
//     is_available: true,
//     condition: "new",
//     image_urls: [
// "https://th.bing.com/th/id/OIP.0_SKZH-jCNY0CDRFMzvG_gHaE8?w=305&h=203&c=7&r=0&o=5&dpr=1.6&pid=1.7"    ],
//     createdAt: "2024-12-01T19:57:42.280Z",
//     updatedAt: "2024-12-01T19:57:42.280Z",
//     category_id: "5bec9ee5-7c3c-4d76-bcba-552183b4aca8"
//   },






//   {
//     equipment_id: "f98e1f67-62fb-4bc1-a76a-df63c555e40a",
//     name: "Canon EOS 5D Mark IV",
//     description: "A high-end DSLR camera for professional photographers.",
//     price_per_day: 4000,
//     is_available: true,
//     condition: "new",
//     image_urls: [
// "https://th.bing.com/th/id/OIP.OKeuEST6YkNZS-bfQQH4JAAAAA?w=187&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7"    ],
//     createdAt: "2024-12-01T19:57:42.280Z",
//     updatedAt: "2024-12-01T19:57:42.280Z",
//     category_id: "5bec9ee5-7c3c-4d76-bcba-552183b4aca8"
//   }, {
//     equipment_id: "f98e1f67-62fb-4bc1-a76a-df63c555e40a",
//     name: "Canon EOS 5D Mark IV",
//     description: "A high-end DSLR camera for professional photographers.",
//     price_per_day: 2000,
//     is_available: true,
//     condition: "new",
//     image_urls: [
// "https://th.bing.com/th/id/OIP.f86xkV6sRRKd4RVryMuTXQHaHa?w=158&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7"    ],
//     createdAt: "2024-12-01T19:57:42.280Z",
//     updatedAt: "2024-12-01T19:57:42.280Z",
//     category_id: "5bec9ee5-7c3c-4d76-bcba-552183b4aca8"
//   },
//   {
//     equipment_id: "f98e1f67-62fb-4bc1-a76a-df63c555e40a",
//     name: "Canon EOS 5D Mark IV",
//     description: "A high-end DSLR camera for professional photographers.",
//     price_per_day: 100,
//     is_available: true,
//     condition: "new",
//     image_urls: [
// "https://th.bing.com/th/id/OIP.0_SKZH-jCNY0CDRFMzvG_gHaE8?w=305&h=203&c=7&r=0&o=5&dpr=1.6&pid=1.7"    ],
//     createdAt: "2024-12-01T19:57:42.280Z",
//     updatedAt: "2024-12-01T19:57:42.280Z",
//     category_id: "5bec9ee5-7c3c-4d76-bcba-552183b4aca8"
//   },
//   {
//     equipment_id: "f98e1f67-62fb-4bc1-a76a-df63c555e40a",
//     name: "Canon EOS 5D Mark IV",
//     description: "A high-end DSLR camera for professional photographers.",
//     price_per_day: 100,
//     is_available: true,
//     condition: "new",
//     image_urls: [
// "https://th.bing.com/th/id/OIP.0_SKZH-jCNY0CDRFMzvG_gHaE8?w=305&h=203&c=7&r=0&o=5&dpr=1.6&pid=1.7"    ],
//     createdAt: "2024-12-01T19:57:42.280Z",
//     updatedAt: "2024-12-01T19:57:42.280Z",
//     category_id: "5bec9ee5-7c3c-4d76-bcba-552183b4aca8"
//   },
//   {
//     equipment_id: "f98e1f67-62fb-4bc1-a76a-df63c555e40a",
//     name: "Canon EOS 5D Mark IV",
//     description: "A high-end DSLR camera for professional photographers.",
//     price_per_day: 100,
//     is_available: true,
//     condition: "new",
//     image_urls: [
// "https://th.bing.com/th/id/OIP.GSe12Dgr96YJ8HkrEWz1KAHaFj?w=247&h=185&c=7&r=0&o=5&dpr=1.6&pid=1.7"    ],
//     createdAt: "2024-12-01T19:57:42.280Z",
//     updatedAt: "2024-12-01T19:57:42.280Z",
//     category_id: "5bec9ee5-7c3c-4d76-bcba-552183b4aca8"
//   }
// ];

  reviewClick(){
   this.router.navigate(['/productreview'])
  }
  conformClick(){
  }
    
}
