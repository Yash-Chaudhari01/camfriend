import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  sharedData:any;
  isLoggedIn:any=true;
  constructor() { }
  setData(data: any): void {
    this.sharedData = data;
  }

    setLogin(){
       this.isLoggedIn=true;
    }
    getLogin(){
   return this.isLoggedIn;
    }

  getData(): any {
    return this.sharedData;
  }

}
