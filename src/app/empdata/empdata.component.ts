import { Component, OnInit } from '@angular/core';
import { productlist } from '../model/productlist';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-empdata',
  templateUrl: './empdata.component.html',
  styleUrls: ['./empdata.component.css']
})
export class EmpdataComponent implements OnInit {

  constructor(private getproduct:ProductService) { }

  public product:productlist[]=[]

  ngOnInit(): void {
  }

  

  allproduct(){
    this.getproduct.HttpRequest().subscribe(res => console.log(res));
  }
  
}

