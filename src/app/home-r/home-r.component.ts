import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-r',
  templateUrl: './home-r.component.html',
  styleUrls: ['./home-r.component.css']
})
export class HomeRComponent implements OnInit {

  public usertype:string="regiter";

  constructor() { }

  ngOnInit(): void {}

  toggelusertype(usertype:string){
    if(usertype == 'R'){
      this.usertype='regiter';
    }
    else if(usertype =='S'){
      this.usertype ='SIGN  IN';
    }
  }


}
