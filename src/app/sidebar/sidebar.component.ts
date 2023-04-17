import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor (
    private router: Router,
    private cookieService: CookieService
  ) {}

  user!: {
    name: string,
    username: string,
    email: string
  }
  ngOnInit(){
    this.user = JSON.parse(this.cookieService.get('user'))
  }
  disconnect(){
    sessionStorage.removeItem('access_token')
    this.cookieService.delete('user')
    //this.httpHeaders.delete('Authorization')
    this.router.navigate(['/'])
  }
}
