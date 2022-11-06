import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  constructor(private empsr:EmployeeService) { }

  ngOnInit(): void {
    console.log(this.empsr.userId);
    console.log(this.empsr.userNmae);
    console.log(this.empsr.stundetlist);

  }
  empData(empForm:any){

  console.log(empForm.value)
  }
}
