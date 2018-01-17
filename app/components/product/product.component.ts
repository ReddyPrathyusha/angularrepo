import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product;
  constructor(
    private route: ActivatedRoute,
    private productService : ProductService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      var id = params.id;
      
      this.productService.get().subscribe(data => {
        this.product = data.find(product => product.productId == id);
      });


    });
  }

}
