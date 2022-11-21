import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-empdata',
  templateUrl: './empdata.component.html',
  styleUrls: ['./empdata.component.css']
})
export class EmpdataComponent implements OnInit {

products: any;

  constructor(private getproducts: ProductService) { }
  produ:boolean=false;
  

  ngOnInit(): void {
  }



  allproducts() {
    this.getproducts.HttpRequest().subscribe(res => {
      console.log(res)
      this.products = res;
      this.produ = true;
    });
  }

}

