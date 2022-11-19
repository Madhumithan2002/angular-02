import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  constructor(private singout:Router) { }

 @Input() navlist:any[]=[
    {
      nanam:'Home',
      pathVal:'/Home',
    },
    {
      nanam:'about',
      pathVal:'/about/54',
    },
    {
      nanam:'table',
      pathVal:'/tabel',
    },
    {
      nanam:'addemployee',
      pathVal:'/add-employee',
    },
    {
      nanam:'reavctiveform',
      pathVal:'/addemployeereactive',
    },
    {
      nanam:'prductslist',
      pathVal:'/productlist',
    },
    {
      nanam:'login',
      pathVal:'/Login',
    },
    {
      nanam:'contact',
      pathVal:'/contact',
    },
  ]

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    sessionStorage.clear();
     this.singout.navigateByUrl('/Login');
  }

}
