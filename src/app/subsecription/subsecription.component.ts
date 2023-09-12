import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-subsecription',
  templateUrl: './subsecription.component.html',
  styleUrls: ['./subsecription.component.scss']
})
export class SubsecriptionComponent implements OnInit {
  name:String="";
  prename:String=""
  mail:String=""
  title:String=""
  description: String = ""
  tel:String=""
  constructor(private route:Router,private service:ApiService ) {
    this.service.getOpenEvents().subscribe(
      res=>{
        let value=this.route.url.split("/")[2];
        res.forEach((e: { [x: string]: string; }) => {
          if(value==e["name"])
          {
            this.title=this.route.url.split("/")[2]
            this.description = e["description"]
          }
        });
        if(this.title=="")
        {
          this.route.navigateByUrl("/")
        }
      })
}


  ngOnInit(): void {
  }
  addPerson(form:NgForm)
  {
    let data=form.value
    data["nameE"]=this.title
    this.service.inscription(data).subscribe(
      (res:any)=>{
        if(res["insertPforE"]=="succ"){
          alert("You are successfully enrolled at "+this.title)
          this.mail=""
          this.name=""
          this.prename=""
        }
        else if(res["insertPforE"]=="exist") {
          alert("You are already registered "+this.title)

        }
        else if(res["insertPforE"]=="no place"){
          alert("Unfortunately all places are reserved "+this.title)

        }
      },
      (err)=>{
        console.log(err)
      }
    )
  }
}
