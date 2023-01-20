import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {  Route, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Page404Component } from '../page404/page404.component';

let ELEMENT_DATA = [
  ];

@Component({
  selector: 'app-members-in-event',
  templateUrl: './members-in-event.component.html',
  styleUrls: ['./members-in-event.component.scss']
})
export class MembersInEventComponent implements OnInit {
  static event=""
  static date1=""
  static date2=""

  displayedColumns: string[] = ['num', 'name', 'prename', 'email'];
  dataSource:any ;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private router:Router,private service:ApiService) {


   }

  ngOnInit(): void {
    this.service.EventInscriptions({"event":MembersInEventComponent.event}).subscribe(
      (res:any)=>{
        let i=0

        ELEMENT_DATA=res;
         for (let e of ELEMENT_DATA){
           e["num"]=++i
         }
        this.dataSource= new MatTableDataSource(ELEMENT_DATA)

        console.log(this.dataSource)
        console.log(ELEMENT_DATA)

      }
      )
  }
  detailStates(){
    let d1=new Date(MembersInEventComponent.date1);
    let d2=new Date(MembersInEventComponent.date2)
    let d0=new Date()
    if(d0.getTime()>= d1.getTime() && d2.getTime()>= d0.getTime() ){
      return true
    }
    return false
  }
}


