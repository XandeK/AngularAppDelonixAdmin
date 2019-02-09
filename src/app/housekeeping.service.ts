import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HousekeepingService {
  results: any [];
  constructor(private http:HttpClient) { }

  //get all staff record
  getstaffrecords() {
    return this.http.get<any[]>('./api/getstaffrecord');
    }
  

    //adding new staff
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

   //get all staff record
   getroomreport() {
    return this.http.get<any[]>('./api/getroomreport');
    }

    //adding new staff
    newroomreport(
      date: string, 
      roomtype: string,
      guestnumber: string) 
      { return this.http.post<any[]>('./api/newroomreport/' + date + '/'
      + roomtype + '/' +  guestnumber, 
      {'date': date, 'roomtype': roomtype, 'guestnumber': guestnumber, });
  
        }


//get all staff record
gethousekeepingreport() {
  return this.http.get<any[]>('./api/gethousekeepingreport');
  }

  //adding new staff
  newhousekeepingreport(
    date: string, 
    jobtype: string,
    staffnumber: string,) 
    { return this.http.post<any[]>('./api/newhousekeepingreport/' + date + '/'
    + jobtype + '/' +  staffnumber, 
    {'date': date, 'jobtype': jobtype, 'staffnumber': staffnumber, });
   }

  //get all dirty room
  getdirtyroom() {
  return this.http.get<any[]>('./api/getdirtyroom');
  }

  //adding new dirty room
  newdirtyroom(
    roomnumber: string) 
    { return this.http.post<any[]>('./api/newdirtyroom/' + roomnumber, 
    {'roomnumber': roomnumber });
  }

      
} 

