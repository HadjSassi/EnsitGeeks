import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,NgForm,Validator,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private service :ApiService,private router:Router) { }

  ngOnInit(): void {

  }


  // connect(form:NgForm){
  //   this.service.login(form.value)
  //   this.router.navigate(["/dashbord"])
  // }
}
