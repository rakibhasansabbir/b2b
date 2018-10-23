import { ProductList } from './../../models/ProductList';
import { ProductsService } from './../../apiServices/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productList: ProductList;
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(res => {
      let objects = res;
      this.productList = objects["data"];
      console.log(this.productList);
    })


  }

}
