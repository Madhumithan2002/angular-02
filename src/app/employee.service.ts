import { Injectable } from '@angular/core';
import {stundent} from '../app/model/studentmdl';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  public userId="102";
  userNmae="madhumithan";

   stundetlist: stundent[] = [
    {
      Rollno: 201,
      Name: 'arunk',
      Class: '5th',
      Section: 'A',
      Age: 10,
      cnt: 826286846328,
    },
    {
      Rollno: 202,
      Name: 'aravind',
      Class: '5th',
      Section: 'A',
      Age: 10,
      cnt: 826286846328,
    },
    {
      Rollno: 203,
      Name: 'ram',
      Class: '5th',
      Section: 'A',
      Age: 10,
      cnt: 826286846328,
    },
    {
      Rollno: 204,
      Name: 'yokesh',
      Class: '5th',
      Section: 'A',
      Age: 10,
      cnt: 826286846328,
    },
    {
      Rollno: 205,
      Name: 'rajkumar',
      Class: '5th',
      Section: 'A',
      Age: 10,
      cnt: 826286846328,
    }
  ]


  getAllstundent():stundent[]{
   return this.stundetlist;
  }
}
