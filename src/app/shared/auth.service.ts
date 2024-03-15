import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:any;
  constructor(private _httpclient:HttpClient,private _router :Router) { 

  }
  registerUser(user:object):Observable<any>{
   return  this._httpclient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',user);
  }
  loginUser(user:object) :Observable<any> {
   return  this._httpclient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',user);
  }
  saveUserData():void{
    if(localStorage.getItem('etoken')!=null){
      this.userData=localStorage.getItem('etoken');
      this.userData=  jwtDecode(this.userData);
      console.log(this.userData);
    }
  }

  logOutUser():void{

   if(localStorage.getItem('etoken')!=null){
    localStorage.removeItem('etoken');
    this._router.navigate(['/login']);
   }
  }
}
