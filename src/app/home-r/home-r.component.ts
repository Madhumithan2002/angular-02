import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-r',
  templateUrl: './home-r.component.html',
  styleUrls: ['./home-r.component.css']
})
export class HomeRComponent implements OnInit {

  public usertype:string="regiter";

  constructor(private log:Router) { }

  ngOnInit(): void {
    let username = localStorage.getItem('username');
    console.log(username);
    if(username == null || username == ''){
      this.log.navigateByUrl('/Login')
    }
}

  toggelusertype(usertype:string){
    if(usertype == 'R'){
      this.usertype='regiter';
    }
    else if(usertype =='S'){
      this.usertype ='SIGN  IN';
    }
  }


}
