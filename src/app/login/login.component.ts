import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginfrm:FormGroup = new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
  })
  userinvalid:boolean=false;
  constructor(private rotr:Router) { }

  ngOnInit(): void {
  }

  lgin(){
    console.log(this.loginfrm.value)

    localStorage.setItem('username','madhumithan');
    this.rotr.navigateByUrl('/tabel');
  }
    // if(this.loginfrm.controls.username.value !='madhumithan' || this.loginfrm.controls.password.value !='1234M'){
    //   this.userinvalid =true
    // }
    // else{
    //   this.userinvalid =false
    // }
  

}
