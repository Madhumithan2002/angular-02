import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-emp-reactive',
  templateUrl: './add-emp-reactive.component.html',
  styleUrls: ['./add-emp-reactive.component.css']
})
export class AddEmpReactiveComponent implements OnInit {

  constructor() { }

  emp:FormGroup = new FormGroup({
    fullnm:new FormControl(),
    address:new FormControl(),
    cnt:new FormControl(),
    city:new FormControl,
    emailid:new FormControl,

  })

  ngOnInit(): void {
  }

  addEmp(){
    console.log(this.emp.value)
  }

}
