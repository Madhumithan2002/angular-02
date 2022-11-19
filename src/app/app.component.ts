import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularsampleproject';

  navlinks:any[]=[
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
      nanam:'productslist',
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
  ];
}


