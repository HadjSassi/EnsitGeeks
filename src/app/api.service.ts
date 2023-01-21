import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Environment} from "@angular/cli/lib/config/workspace-schema";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  backEnd = environment.backend;
  constructor(private http: HttpClient) {

  }
//https://www.ensitgeeksclub.com
  public getHeader(): HttpHeaders {
    let requestHeader = new HttpHeaders();

    requestHeader.append('Content-Type', 'application/json');
    return requestHeader;
  }

  getAllMembers() {
    return this.http.get(this.backEnd+"backend/getMembers.php");
  }

  addNewMembers(person: any): Observable<any> {

    return this.http.post(this.backEnd+"backend/addNewMembers.php", person, {headers: this.getHeader()})
  }

  test() {
    return this.http.post(this.backEnd+"backend/api.php", {"me": 0});
  }

  login(info: any): Observable<any> {
    return this.http.post(this.backEnd+"backend/login.php", info)
  }

  sendEmail(mails: any): Observable<any> {
    return this.http.post(this.backEnd+"backend/login.php", mails)
  }

  updateScore(obj: any): Observable<any> {
    return this.http.post(this.backEnd+"backend/updateScore.php", obj);
  }

  getNewSore(obj: any): Observable<any> {
    return this.http.post(this.backEnd+"backend/score.php", obj);

  }

  passToIneterview(obj: any): Observable<any> {
    return this.http.post(this.backEnd+"backend/updateForInterview.php", obj);

  }

  sendManyMails(obj: any): Observable<any> {
    return this.http.post(this.backEnd+"backend/sendManyEmails.php", obj);
  }

  sendEmailAndUpdateState(obj: any): Observable<any> {
    return this.http.post(this.backEnd+"backend/sendEmailAndUpdateState.php", obj);
  }

  getAllEvents(): Observable<any> {
    return this.http.get(this.backEnd+"backend/allEvents.php");
  }

  getOpenEvents(): Observable<any> {
    return this.http.get(this.backEnd+"backend/openEvents.php");
  }

  EventInscriptions(obj: any): Observable<any> {
    return this.http.post(this.backEnd+"backend/eventDetails.php", obj);
  }

  newEvent(obj: any): Observable<any> {
    return this.http.post(this.backEnd+"backend/newEvent.php", obj);
  }

  inscription(person: any): Observable<any> {
    return this.http.post(this.backEnd+"backend/inscription.php", person);
  }

  addNewMemberToPole(obj: any): Observable<any> {
    return this.http.post(this.backEnd+"backend/addNewMemberToPole.php", obj);
  }

  getMembersByPoles(): Observable<any> {
    return this.http.get(this.backEnd+"backend/getMembersByPoles.php");
  }

}
