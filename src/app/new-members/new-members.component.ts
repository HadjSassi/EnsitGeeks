import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-new-members',
  templateUrl: './new-members.component.html',
  styleUrls: ['./new-members.component.css']
})

export class NewMembersComponent implements OnInit {
  name:string="";
  prename:string="";
  state="";
  score:number=0;
  email="";
  skills="";
  dep="";
  dateInterview="";
  hourInterview="";
  salleInterview="";
  constructor(private service:ApiService) {
    // @ts-ignore
    this.name=localStorage.getItem("name")
    // @ts-ignore
    this.prename=localStorage.getItem("prename")
    // @ts-ignore
    this.email=localStorage.getItem("mail")
    // @ts-ignore
    this.skills=localStorage.getItem("skills")
    // @ts-ignore
    this.dep=localStorage.getItem("dep");

    this.service.getNewSore({"mail":this.email}).subscribe(
      (res:any)=>{
        this.score=res[0][0];
        this.state=res[0]["states"]
        this.salleInterview=res[0]["salleI"]
        this.hourInterview=res[0]["hourInter"]
        this.dateInterview=res[0]["dateInter"]
      },
      (err)=>{
        console.log(err)

      }
    )
  }

  ngOnInit(): void {
  }

  add(){
    this.score++;
  }
  interviewAffiche()
  {
    if(this.state=="pre-inscription")
    {
      return true
    }
    else{
      return false
    }
  }
  notOldMember(){
    if(this.state=="old" )
    {
      return false
    }
    else{
      return true
    }
  }
  moin(){
    this.score--;
  }
  goToInterview(form:NgForm){
    console.log(form.value)
    this.service.passToIneterview({"name":this.name,"prename":this.prename,"mail":this.email,"data":form.value}).subscribe(
      (res:any)=>{
        if(res["passe"]==true){
          alert(this.name+" "+this.prename+" passe to the interview")

        }
        else{
          alert(this.name+" "+this.prename+" can't passe to the interview")
        }
        location.reload();
        console.log(res["passe"])
      },
      (err)=>{
        alert("there is an error check your server");
      }
      )
  }
  updateScore(){
    this.service.updateScore({"mail":this.email,"score":this.score}).subscribe(
      (res)=>{
        if(res["state"]=="failed")
        {
          alert("the update of the score doesn't work")
        }
        else{
          alert("the update has been done")

        }
      },
      (err)=>{
        console.log(err);
      }
    )  }
}
