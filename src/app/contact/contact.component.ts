import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator,Validators } from '@angular/forms';
// @ts-ignore
import AOS from 'aos';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // @ts-ignore
  ContactForm : FormGroup ;
  constructor(private formBuilder : FormBuilder) { }

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


  }
}
