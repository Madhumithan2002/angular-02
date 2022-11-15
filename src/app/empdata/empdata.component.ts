import { Component, OnInit } from '@angular/core';
import EmployeeService from '../employee.service';

@Component({
  selector: 'app-empdata',
  templateUrl: './empdata.component.html',
  styleUrls: ['./empdata.component.css']
})
export class EmpdataComponent implements OnInit {

  constructor(private empsr:EmployeeService) { }

  ngOnInit(): void {
    console.log(this.empsr.userId);
    console.log(this.empsr.userNmae);
  }

}
