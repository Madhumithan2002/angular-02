import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-empdata',
  templateUrl: './empdata.component.html',
  styleUrls: ['./empdata.component.css']
})
export class EmpdataComponent implements OnInit {
allproducts() {
throw new Error('Method not implemented.');
}
products: any;

  constructor(private getproducts: ProductService) { }
  produ:boolean=false;
  prducts: any;

  ngOnInit(): void {
  }



  allprducts() {
    this.getproducts.HttpRequest().subscribe(res => {
      console.log(res)
      this.prducts = res;
      this.produ = true;
    });
  }

}

