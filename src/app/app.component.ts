import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Location } from '@angular/common';
// @ts-ignore
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import {environment} from "../environments/environment";
export class info{
  static my:any;
 }

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  route:any;
  test:boolean=true;
  tab=["/Home","","/JoinUs","/Contact","/Store"];
  loc:any;
  footer = environment.footer;
  constructor(location: Location, router: Router,private service:ApiService) {
     this.route = location.path();
     this.loc=location;
     this.test=this.tab.indexOf(this.route) > -1;//pour ne pas afficher nav et footer en cas de 404 ou d'echec!
    }


  ngOnInit() {

         // this.service.getAllEvents().subscribe(
         //   (res:any)=>{
         //
         //    info.my=res;
         //  },
         //  (err)=>{
         //    console.log(err);
         //  })
      }



  }


