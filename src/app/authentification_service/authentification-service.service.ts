import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationServiceService {
/*
  private PHP_API_SERVER:string;
  formData:FormData=new FormData();

  constructor(private httpClient:HttpClient,private router:Router,private snackBar:MatSnackBar,) {
    this.PHP_API_SERVER = api_url.url;
   }

  login(email:string,password:string){
    console.log("AuthenticationService.login ==>");
    console.log("email :  ==>"+email);
    console.log("password :  ==>"+password);

    this.formData.append("email",email);
    this.formData.append("password",password);

    return this.httpClient.post(`${this.PHP_API_SERVER}/Geeks_Club_webSite/Geeks_Club_WebSite/Backend/authentication/login.php`,
    this.formData).subscribe(
      (response:any) =>{
        console.log("login response ==> ");
        console.log(response);
        if(!(response === undefined || response.length == 0)){
          console.log(response[0]['role']);
          window.localStorage.setItem("role",response[0]['role']);
          window.localStorage.setItem("email",response[0]['adresse_mail']);
          if (response[0]['role']=="administrateur")
            this.router.navigate(['/Admin']);
          else if (response[0]['role']=="membre")
          {
            this.router.navigate(['/GeeksMember']);
          }
        }
        else{
          this.snackBar.open("Compte inexistant !!!","Ok",{
            panelClass: ['mat-toolbar', 'mat-warn']
          });
        }
      }
    );
  }

  register(formData:FormData){

    let headers = new HttpHeaders();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        let options={headers:headers};

        return this.httpClient.post(`${this.PHP_API_SERVER}/Geeks_Club_webSite/Geeks_Club_WebSite/Backend/authentication/register.php`,
      formData,options).subscribe(
      (response) => {
        console.log("responseCode==> "+response);
        this.snackBar.open("Inscription avec succès !","Ok",{
          panelClass: ['mat-toolbar', 'mat-success'],

        });
        this.router.navigate(['/Member']);
      },
    (error) => {
      console.log(error);
      if (error.status === 409)
        this.snackBar.open("Compte déja existant !","Ok",{
          panelClass: ['mat-toolbar', 'mat-warn']
        });
    }
    );
  }
*/
}
