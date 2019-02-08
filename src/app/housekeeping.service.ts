import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HousekeepingService {

  constructor(private http:HttpClient) { }

  getstaffrecords() {
    return this.http.get<any[]>('./api/getstaffcecord');
    }
  
  newstaff(staffname: string, 
    staffaddress: string,
    permitstatus: string, 
    mobilenumber: string,
    email: string, 
    gender: string,
    bankdetail: string, 
    special: string,) 
    { return this.http.post<any[]>('./api/newstaff/' + staffname + '/'
    + staffaddress + '/' +  permitstatus + '/' + mobilenumber  +  '/'+ email + '/' +  gender + '/' + bankdetail + '/' + special , 
    {'staffname': staffname, 'staffaddress': staffaddress, 'permitstatus': permitstatus, 'mobilenumber': mobilenumber, 'email': email, 'gender': gender, 'bankdetail': bankdetail, 'special': special, });

      }
}
