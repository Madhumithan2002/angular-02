import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-emp-reactive',
  templateUrl: './add-emp-reactive.component.html',
  styleUrls: ['./add-emp-reactive.component.css']
})
export class AddEmpReactiveComponent implements OnInit {

  constructor() { }

  emp:FormGroup = new FormGroup({
    fullName:new FormControl("",[Validators.required,Validators.minLength(10)]),
    address:new FormControl(),
    cnt:new FormControl(),
    city:new FormControl(),
    emailid:new FormControl("",[Validators.email]),

  })

  ngOnInit(): void {
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
      emailid:'madhu@gmail.com'
    })
    this.emp.patchValue({
      fullName:'madhumithan',
      city:'chn',
      cnt:'987652478',
      emailid:'test@gmail.com'
    });
  }
}
