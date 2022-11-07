import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginfrm = new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
  })
  userinvalid:boolean=false;
  constructor(private rotr:Router) { }

  ngOnInit(): void {
  }

  lgin(){
    console.log(this.loginfrm.value)

  
    
  
     if(this.loginfrm.controls.username.value !='madhumithan' || this.loginfrm.controls.password.value !='1234M'){
       this.userinvalid =true
     }
    else{
       this.userinvalid =false;
       localStorage.setItem('username',this.loginfrm.controls.username.value);
        this.rotr.navigateByUrl('/tabel');
    }
  }

}
