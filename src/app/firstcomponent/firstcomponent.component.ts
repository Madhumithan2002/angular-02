import { Component, OnInit } from '@angular/core';
import{stundentcls} from'../model/stundent';
import{people} from'../model/people';
@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {

  public peoplelist:people[]=[
    {
    country:'usa',
        name:'yokesh',
  },
  {
    country:'italy',
    name:'arun',
  },
  {
    country:'japan',
    name:'ram',
  },
  {
    country:'india',
    name:'rajkumar',
  },
]

todayDt = new Date();
jaonVal = {name:'ram',age:'21',address:{a1:'london',a2:'india'}};
months =["jan","feb","mar","april","may","jun","july","aug","sept","oct","nov","dec"];

amount =350;
marks =0.9876;
  constructor() { }

  ngOnInit(): void {
  }

  // addstundent(): stundentcls{
  //   let stundent:stundentcls=null;
  //   return stundent;
  // }

  getcolor(cntry:string):string{
    if (cntry =='usa'){
      return 'skyblue';
    }
    else if (cntry == 'japan'){
      return 'red';
    }
    else if (cntry == 'italy'){
      return 'yellow';
    }
     else if (cntry == 'india'){
       return 'blue';
      }
      else{
        return 'maroon';
      }
    }
  }
  



