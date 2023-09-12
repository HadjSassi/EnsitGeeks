import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {StoreService} from "../services/store.service";

// @ts-ignore
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit{
  constructor( private router: Router, private storeService: StoreService) {
  }


  //filter by price logic
  min: number = 0; // Initial minimum price
  max: number = 60; // Initial maximum price
  //filter by price logic
  min0: number = 0; // Initial minimum price
  max0: number = 60; // Initial maximum price

  value: number = 5;
  public products = [
    {
      id: "1",
      date: "17/08/2023",
      name: "clothes1",
      description: "description here",
      type: "clothes",
      price: "23d",
      oldP: "60d",
      path: ""
    }
  ]
  searchText: string = '';
  filteredProducts = [...this.products];

  ngOnInit(): void {
    this.storeService.getAllItems().subscribe(
      (response: any) => {
        this.products = response;
        this.filteredProducts = [...this.products];
        console.log(this.products);
      },(error) =>{
        console.log('Error Fetching items: ',error);
      }
    );
    this.storeService.getMaxPrice().subscribe(
      (response:any) => {
        this.max = response['max(price)'];
        this.max0 = response['max(price)'];
        console.log("the max is "+this.max);
      }
    );
    this.storeService.getMinPrice().subscribe(
      (response:any) => {
        this.min = response['min(price)'];
        this.min0 = response['min(price)'];
        console.log("the min is "+this.min);
      }
    );

  }

  itemise(id:string) {
    this.router.navigate(['/Item',id]);
  }

  filterByCategory(category: string) {
    if (category === 'All features') {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter(product => product.type === category);
    }
  }

  showAll() {
    this.filteredProducts = [...this.products];
  }


  filterProducts() {
    if (this.searchText.trim() !== '') {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products;
    }
  }

// Function to format the slider labels
  formatLabel(value: number) {
    return `${value}d`;
  }


  filterByPrice() {
    this.filteredProducts = this.products.filter(product => {
      const productPrice = parseFloat(product.price);
      return productPrice >= this.min && productPrice <= this.max;
    });
  }


}

