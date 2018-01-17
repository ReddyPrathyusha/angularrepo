import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  products = [];
  title;

  selectedState;
  selectedCities;

  states = [{
    name : 'Assam',
    cities : [
      'Silchar',
      'Dibrugarh',
      'Diphu'
    ]
  },{
    name : 'Chhatisgarh',
    cities : [
      'Raipur',
      'Bhilai',
      'Dipka'
    ]
  }];



  red = 'pink';

  sometext = "Highlight Me!!"

  model = {
    left: true,
    middle: false,
    right: false
  };

  constructor(
    private productService : ProductService
  ) {

  }
  onStateChnage(){
    this.selectedCities = this.states.find(state => state.name == this.selectedState).cities;
  }

  ngOnInit() {
    this.productService.get().subscribe(data => {
      this.products = data;
    });
  }

}
