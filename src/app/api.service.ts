import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {
    
   }
//https://www.ensitgeeksclub.com
   public getHeader(): HttpHeaders {
    let requestHeader = new HttpHeaders();
   
    requestHeader.append('Content-Type', 'application/json');
    return requestHeader;
  }
   getAllMembers(){
    return this.http.get("http://localhost:8800/backend/getMembers.php");
   }
   addNewMembers(person:any):Observable<any>
   {
  
    return this.http.post("http://localhost:8800/backend/addNewMembers.php",person,{headers:this.getHeader()})}
   test(){
    return this.http.post("http://localhost:8800/backend/api.php",{"me":0});
   }
   login(info:any):Observable<any>{
    return this.http.post("http://localhost:8800/backend/login.php",info)
   }
   sendEmail(mails:any):Observable<any>{
    return this.http.post("http://localhost:8800/backend/login.php",mails)
   }
   updateScore(obj:any):Observable<any>{
    return this.http.post("http://localhost:8800/backend/updateScore.php",obj);
   }
   getNewSore(obj:any):Observable<any>{
    return this.http.post("http://localhost:8800/backend/score.php",obj);

  }
  passToIneterview(obj:any):Observable<any>{
    return this.http.post("http://localhost:8800/backend/updateForInterview.php",obj);

  }
  sendManyMails(obj:any):Observable<any>{
    return this.http.post("http://localhost:8800/backend/sendManyEmails.php",obj);
  }

  sendEmailAndUpdateState(obj:any):Observable<any>{
    return this.http.post("http://localhost:8800/backend/sendEmailAndUpdateState.php",obj);
  }

  getAllEvents():Observable<any>{
    return this.http.get("http://localhost:8800/backend/allEvents.php");
  }

  getOpenEvents():Observable<any>{
    return this.http.get("http://localhost:8800/backend/openEvents.php");
  }

  EventInscriptions(obj:any):Observable<any>{
    return this.http.post("http://localhost:8800/backend/eventDetails.php",obj);
  }

  newEvent(obj:any):Observable<any>{
    return this.http.post("http://localhost:8800/backend/newEvent.php",obj);
  }

  inscription(person:any):Observable<any>{
    return this.http.post("http://localhost:8800/backend/inscription.php",person);
  }
  addNewMemberToPole(obj:any):Observable<any>{
    return this.http.post("http://localhost:8800/backend/addNewMemberToPole.php",obj);
  }

  getMembersByPoles():Observable<any>{
    return this.http.get("http://localhost:8800/backend/getMembersByPoles.php");
  }

}
