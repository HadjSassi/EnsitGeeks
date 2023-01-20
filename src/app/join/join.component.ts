import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,NgForm,Validator,Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { AuthentificationServiceService } from '../authentification_service/authentification-service.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
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
    this.service.addNewMembers(form.value).subscribe(
      (res:any)=>{
        if(res["state"]==2){
          this.msg="This person is already exist"
          this.colors="#a48eff"
          setTimeout(()=>{
            this.msg="";

          },2500
          )
        }
        else if(res["state"]==1) {

          this.msg="Congrats your pre-registration is successful, Check your Email for more informations"
          this.colors="#B4E8C0"
          setTimeout(()=>{
            this.msg="";
            this.colors="";
            this.name="";
            this.prename="";
            this.phone="";
            this.mail="";
            this.skills="";
            this.msg="";
          },2500
          )
        }
        else{
          this.msg="This phone number already used "
          this.colors="#EBFFAF"
          setTimeout(()=>{
            this.msg="";

          },2500
          )
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
