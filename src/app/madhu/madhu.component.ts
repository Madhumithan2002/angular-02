import { Component, OnInit } from '@angular/core';
import { stundent } from '../model/studentmdl';
import { stundentcls } from '../model/stundent';

@Component({
  selector: 'app-madhu',
  templateUrl: './madhu.component.html',
  styleUrls: ['./madhu.component.css']
})
export class MadhuComponent implements OnInit {

  title: string = 'madhumithan'

  madhu: string = 'arun,yokesh'
  stu: boolean = true;

  isDisabled: boolean = false;
  imgNm: string = "download.png"
  userType: string = 'Teacher'

  stundetdata: stundent = {
    Rollno: 101,
    Name: 'arunk',
    Class: '5th',
    Section: 'A',
    Age: 10,
    cnt: 826286846328,

  }

  public stundetlist: stundent[] = [
    {
      Rollno: 101,
      Name: 'arunk',
      Class: '5th',
      Section: 'A',
      Age: 10,
      cnt: 826286846328,
    },
    {
      Rollno: 102,
      Name: 'aravind',
      Class: '5th',
      Section: 'A',
      Age: 10,
      cnt: 826286846328,
    },
    {
      Rollno: 103,
      Name: 'ram',
      Class: '5th',
      Section: 'A',
      Age: 10,
      cnt: 826286846328,
    },
    {
      Rollno: 104,
      Name: 'yokesh',
      Class: '5th',
      Section: 'A',
      Age: 10,
      cnt: 826286846328,
    },
    {
      Rollno: 105,
      Name: 'rajkumar',
      Class: '5th',
      Section: 'A',
      Age: 10,
      cnt: 826286846328,
    }
  ]

  public stundent: stundentcls[] = [
    {
      Rollno: 101,
      Name: 'arunk',
      Class: '5th',
      Section: 'A',
      Age: 10,
      cnt: 826286846328,
    },
    {
      Rollno: 102,
      Name: 'aravid',
      Class: '5th',
      Section: 'A',
      Age: 10,
      cnt: 826286846328,
    },
    {
      Rollno: 103,
      Name: 'ram',
      Class: '5th',
      Section: 'A',
      Age: 10,
      cnt: 826286846328,
    },
    {
      Rollno: 104,
      Name: 'yokesh',
      Class: '5th',
      Section: 'A',
      Age: 10,
      cnt: 826286846328,
    },
    
  ]

  public subject: String[] = ['arun', 'ram', 'yokesh', 'aravind']

  submitform() {
    console.log(this.title);
    this.title = "updating using event data binding"
    console.log(this.madhu);
    this.madhu = "i am in chennai"


  }

  constructor() { }

  ngOnInit(): void {
  }
  student() {
    this.stu = true;
  }

  toggleusertype(usertyp: string) {

    if (usertyp == 'T') {
      this.userType = 'teacher';
    }
    else if (usertyp == 'S') {
      this.userType = 'stundent';
    }
  }
}





