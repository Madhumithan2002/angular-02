import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  constructor() { }

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
      nanam:'productlist',
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

}
