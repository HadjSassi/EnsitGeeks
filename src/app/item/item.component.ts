import { Component, OnInit } from "@angular/core";
import { Item } from "../model/item.model";
import {ActivatedRoute, Router} from "@angular/router";
import {StoreService} from "../services/store.service";
@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"],
})
export class ItemComponent implements OnInit {
  item : Item = {id:0,name:"",description:"",price:0,colors:[],sizes:[],path:"",date:new Date(),type:""};
  selectedQuantity: number = 1;
  selectedColor: string ="Red";
  selectedSize: string ="S";
  constructor( private router: Router, private route: ActivatedRoute, private storeService: StoreService) {}

  ngOnInit() {
    this.storeService.getOneItem(this.route.snapshot.params['id']).subscribe(
      (response: any) => {
        this.storeService.getOneItem(this.route.snapshot.params['id']).subscribe(
          (response: any) => {
            this.item = {
              id: response.id,
              name: response.name,
              description: response.description,
              price: parseFloat(response.price), // Convert string to number
              colors: response.colors.split(','), // Split the string into an array
              sizes: response.sizes.split(','),   // Split the string into an array
              path: "../../assets/store/"+response.path,
              date: new Date(response.date), // Convert to Date object
              type: response.type,
            };
            this.selectedColor = this.item.colors[0];
            this.selectedSize = this.item.sizes[0];
          },
          (error) => {
            console.log('Error Fetching items: ', error);
          }
        );
      },(error) =>{
        console.log('Error Fetching items: ',error);
      }
    );

  }
  addToCart() {
    //todo  Perform the necessary logic to add the selected item to the user's cart
    console.log(
      "Item added to cart:",
      this.item,
      "Quantity:",
      this.selectedQuantity,
      "Color:",
      this.selectedColor
    );
    this.router.navigate(['/command',this.route.snapshot.params['id'],this.selectedQuantity,this.selectedSize,this.selectedColor]);
  }
}
