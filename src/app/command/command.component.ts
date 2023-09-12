import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Item} from "../model/item.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {StoreService} from "../services/store.service";

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private storeService: StoreService) {
  }

  id: number = 0;
  nb: number = 1;
  size: string = "";
  color: string = "";
  itemName: string = "";
  name: string = "";
  address: string = "";
  email: string = "";
  phone: number = 12345678;
  more: string = "";
  backend: string = environment.backend;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.nb = this.route.snapshot.params['nb'];
    this.size = this.route.snapshot.params['size'];
    this.color = this.route.snapshot.params['color'];
    this.storeService.getOneItem(this.route.snapshot.params['id']).subscribe(
      (response: any) => {
        this.storeService.getOneItem(this.route.snapshot.params['id']).subscribe(
          (response: any) => {
            this.itemName = response.name;
          },
          (error) => {
            console.log('Error Fetching items: ', error);
          }
        );
      }, (error) => {
        console.log('Error Fetching items: ', error);
      }
    );
  }

  isValidForm(): boolean {
    // @ts-ignore
    return this.name && this.email && this.phone && this.nb && this.size && this.color;
  }

  placeOrder() {
    console.log(this.name, this.email, this.address, this.phone, this.nb, this.size, this.color, this.more);
    let message = "You're Ordering "+this.itemName+" "+this.size+" "+this.color+"<br>" +
      "Quantity : "+this.nb+"<br>"+
      "More : " +this.more+"<br>"+
      "We'll reach and contact you on either the" +
      "Phone Number "+this.phone +" Or on this mail "+this.email+" Or we'll deliver it to "+ this.address+" <br>"+
      "Thank you for choosing us :)";
    // Prepare data to send to the backend
    const orderData = {
      name: this.name,
      email: this.email,
      body: message
    };
    console.log(orderData)
    // Send a POST request to your PHP script
    this.http.post(this.backend + '/commandStore.php', orderData)
      .subscribe(
        response => {
          console.log('Email sent successfully:', response);
          message = message.replaceAll("<br>","\n")
          console.log(message);
          alert(message);
          this.router.navigate(['/']);
        },
        error => {
          console.error('Error sending email:', error);
          alert("We're sorry, there is an error occured, we'll try to fix it as soon as possible!");
          // Handle error appropriately
        }
      );
  }


}
