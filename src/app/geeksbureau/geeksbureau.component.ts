import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-geeksbureau',
  templateUrl: './geeksbureau.component.html',
  styleUrls: ['./geeksbureau.component.scss']
})
export class GeeksbureauComponent implements OnInit {

  constructor(private service :ApiService,private router:Router) { }

  ngOnInit(): void {
    
  }

  
  connect(form:NgForm){
    this.service.login(form.value).subscribe(
      (res:any)=>{
        if(res["token"]!="0"){
          localStorage.setItem('token',res["token"])
          this.router.navigate(["/dashbord"])    
        }
      },
      (err)=>{
        console.log(err)
      }
    )
  }

}
