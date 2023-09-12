import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator,Validators } from '@angular/forms';
// @ts-ignore
import AOS from 'aos';
import {environment} from "../../environments/environment";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // @ts-ignore
  ContactForm : FormGroup ;
  backend: string = environment.backend;
  constructor(private router: Router, private formBuilder : FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.initForm();
    AOS.init();
  }

  initForm(){
   this.ContactForm = this.formBuilder.group({
     name:["",Validators.required],
     lastname:["",Validators.required],
     email:["",[Validators.required,Validators.email]],
     subject:["",Validators.required],
     msg:["",Validators.required]
   });
  }
  onSubmitForm(){
    const FormValue=this.ContactForm.value;
    const orderData = {
      name:FormValue['name'],
      prename:FormValue['lastname'],
      email:FormValue['email'],
      body: FormValue['msg'],
      subject:FormValue['subject']
    };
    // console.log(orderData);
    this.http.post(this.backend + 'contactUs.php', orderData).subscribe(
        response => {
          console.log('Email sent successfully:', response);
          alert("Email Sent!");
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
