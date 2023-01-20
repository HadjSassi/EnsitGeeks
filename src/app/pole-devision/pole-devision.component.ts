import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pole-devision',
  templateUrl: './pole-devision.component.html',
  styleUrls: ['./pole-devision.component.scss']
})
export class PoleDevisionComponent implements OnInit {
  formData: FormData=new FormData();
  colors:string="";
  name:string="";
  prename:string="";
  phone:string="";
  mail:string="";
  skills:string="";
  msg:string="";
  constructor(private service:ApiService) {


  }

  ngOnInit(): void {
  }

  onSubmitForm(form:any)
  {
    console.log(form.value);


    this.formData.append("prenom",form.value.name);
    this.formData.append("nom",form.value.lastname);
    this.formData.append("adresse_mail",form.value.email);
    this.formData.append("mdp",form.value.mdp);
    this.formData.append("telephone",form.value.mobile);
    this.formData.append("pole",form.value.dep);


    form.reset();

  }
  addPerson(form:NgForm){
    console.log("form",form.value);
    this.service.addNewMemberToPole(form.value).subscribe(
      (res:any)=>{
        if(res["pole"]=="succ"){
          this.msg="Congrats "+this.name+" "+this.prename+" ,You are affected to the pole "+form.value["pole"]
            this.colors="";
            this.name="";
            this.prename="";
            this.phone="";
            this.mail="";
            this.skills="";
        }
        else if(res["pole"]=="errorEmail") {

          this.msg="There is an error"
          this.colors="#B4E8C0"
            this.colors="";
            this.name="";
            this.prename="";
            this.phone="";
            this.mail="";
            this.skills="";

        }
        else{
          this.msg="You are already affected "

        }
        alert(this.msg)

      },
      (err)=>{

        this.msg="There is an erreur try next time"
          this.colors="#EE9494"
          console.log(err);
          setTimeout(()=>{
            this.msg="";

          },2500
          )
      }
    )

  }
}
