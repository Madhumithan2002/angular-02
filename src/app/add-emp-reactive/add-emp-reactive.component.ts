import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {gtrs20} from '../shared/customvalidation/employeevalidation'
import {countryy} from '../model/countrylist';import { Router } from '@angular/router';
 '../model/country'

@Component({
  selector: 'app-add-emp-reactive',
  templateUrl: './add-emp-reactive.component.html',
  styleUrls: ['./add-emp-reactive.component.css']
})
export class AddEmpReactiveComponent implements OnInit {

  constructor(private log:Router) { }

  countrylist: any = [{
      cntryCode:'ind',
      cntryVale:'INDIA',
  },
  {
    cntryCode:'usa',
    cntryVale:'AMARICA',
  },
  {
    cntryCode:'eng',
    cntryVale:'ENGLAND',
},
{
  cntryCode:'isl',
  cntryVale:'ISLAND',
}]
   
   


  emp = new FormGroup({
    fullName:new FormControl("",[Validators.required,Validators.minLength(10)]),
    address:new FormControl(),
    cnt:new FormControl("",[gtrs20]),
    city:new FormControl(),
    emailid:new FormControl("",[Validators.email,Validators.required]),
    country:new FormControl('',Validators.required)

  })

  ngOnInit(): void {
    let username = localStorage.getItem('username');

    console.log(username);
    if(username == null || username == ''){
      this.log.navigateByUrl('/Login')
    }
  }

  addEmp(){
    console.log(this.emp.value)
  }

  Eidtemployee(){
    this.emp.setValue({
      fullName:'arun',
      address:'OMR chennai',
      cnt:'98776434',
      city:'chn',
      emailid:'madhu@gmail.com',
      country:'india'
    })
    this.emp.patchValue({
      fullName:'madhumithan',
      city:'chn',
      cnt:'987652478',
      emailid:'test@gmail.com'
    });
  }

  countryVal(){
  //  this.emp.controls.city.setValidators(Validators.required)
  }
}
