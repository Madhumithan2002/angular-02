import { Component, OnInit } from '@angular/core';
import EmployeeService from '../employee.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private porse: EmployeeService) { }

  productlist: any;

  ngOnInit(): void {
  }

  // getallproductlistt() {
  //   this.porse.getAllPorductlist().subscribe
  //   ((product) => { 
  //     console.log(product);
  //     this.productlist = product; })

  // }

  getallproductlistt(){
    console.log(this.productlist.value)
  }

}


