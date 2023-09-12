import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  getAllItems(){
    return this.http.get(environment.backend+"/allitems.php");
  }

  getMaxPrice(){
    return this.http.get(environment.backend+"/maxprice.php");
  }

  getMinPrice(){
    return this.http.get(environment.backend+"/minprice.php");
  }

  getOneItem(id:number){
    return this.http.get(`${environment.backend}/getitem.php?id=${id}`);
  }

}
