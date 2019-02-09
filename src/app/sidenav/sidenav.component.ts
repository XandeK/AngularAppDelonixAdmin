import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(public nav: NavbarService , private router:Router) { }

  ngOnInit() {
    let data = sessionStorage.getItem("email");
    console.log(data);
  }
  logOut(){
    this.router.navigateByUrl('/login')
    this.nav.hide()
    
  }

}
