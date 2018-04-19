import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

export class User {
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
export class Auth {
  auth : boolean;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}


@Injectable()
export class RestService {
    currentUser: User;
    userId : string = null;
    authToken : string= null;
    baseUrl : string= "http://localhost:3000";

    constructor(private http:Http) {

    }

    getCurrentUser(){
      if(this.currentUser != null){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token', this.authToken);

        return this.http.get(this.baseUrl + "/api/v1/user/" + this.userId, headers)
        .map(response => {
            this.currentUser = new User(response.json());
            return this.currentUser;
        })
        .catch((error)=>{
            console.log("Error= " + error.status);
            return null;
        });
      }else {
        return this.currentUser;
      }

    }

    hasValidToken(){
      if(this.authToken != null){
        return true;
      }else{
        return false;
      }

    }


    login(credentials) : Observable<Auth> {
        if (credentials.username === null || credentials.password === null) {
             return Observable.throw("Please insert credentials");
        } else {
          let headers = new Headers();
          headers.append('Content-Type', 'application/json');
          //headers.append('x-access-token', this.authToken);

          return this.http.post(this.baseUrl + "/api/v1/auth/login", credentials, headers)
          .map(response => {
            this.authToken = response.json().token;
            this.userId = response.json()._id;
            return new Auth(response.json());
          })
          .catch((error)=>{
              console.log("Error= " + error.status);
              return null;
              //return Observable.throw("Error making http call  ==  " + error.status);
          });

        }


    }
}
