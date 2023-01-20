import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { EventDetailComponent } from '../event-detail/event-detail.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  info="";
  date1="";
  date2="";
  max="";
  nameE="";
  constructor(private service:ApiService) { }

  ngOnInit(): void {
  }
  

  logout(){
    localStorage.setItem("token","0");
  }

  addEvent(form:NgForm){
    this.service.newEvent(form.value).subscribe(
      (res)=>{
        if(res["insertE"]==true)
        {
          this.info="";
          this.date1="";
          this.date2="";
          this.max="";
          this.nameE="";
          alert("event has been created")
        
        }
        else{
          alert("event is already exist")

        }
        
      }
      ,(err)=>{
        console.log(err)
      }
    )
  }
  compareDate(){
    let d1=new Date(this.date1)
    let d2=new Date(this.date2)
    if(d1.getTime() >d2.getTime()){
      return true
    }
    return false
  }
}