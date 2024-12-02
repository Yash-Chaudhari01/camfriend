import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  sharedData:any;
  isLoggedIn:any=true;
  loggedInUser:any;
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
  setLoginUser(user:any):any{
    this.loggedInUser=user;
  }
  getLoginUser()
  {
    return this.loggedInUser;
  }
  location:any;
  getLocation()
  {
    return this.location;
  }
  setLocation(location:any)
  {
      this.location = location
  }

}
