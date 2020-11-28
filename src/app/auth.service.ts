import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginPayload } from './auth/login-payload';
import { RegisterPayoad } from './auth/register-payload';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "http://localhost:8000/api/";

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) { }
   
  //login API call

  login(loginPayload : LoginPayload) : Observable<boolean> {
    let headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.baseUrl + 'users/login', loginPayload, { headers: headers }).pipe(map(data => {
      this.localStorageService.store('loginData', data);
      return true;
    }));
  }

    register(registerPayload: RegisterPayoad): Observable<any> {
      let headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.httpClient.post(this.baseUrl + 'users/signup', registerPayload, { headers: headers });
    }

    updateProfile(updatePayload: RegisterPayoad, id: Number): Observable<any> {
      let headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.httpClient.patch(this.baseUrl + 'users/userUpdate/' + id, updatePayload, { headers: headers });
    }
  
    isAuthenticated(): boolean {
      return this.localStorageService.retrieve('loginData') != null;
    }
  
    // logout - Clear localstorage data.
    logout() {
      this.localStorageService.clear('loginData');
    }
  
    //delete user
    deleteUser(id: Number) {
      let headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.httpClient.delete(this.baseUrl + 'users/userDelete/' + id, { headers: headers });
    } 
}