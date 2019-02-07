import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  //register new admin account
  regAdmin(name: string, email: string, password: string, contact: string, role: string) {
    return this.http.get('/api/regAdmin/' + name + "/" + email + "/" + password + "/" + contact + "/" + role );
  }
  
}
