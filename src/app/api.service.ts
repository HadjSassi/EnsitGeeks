// @ts-ignore
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Environment} from "@angular/cli/lib/config/workspace-schema";
import {environment} from "../environments/environment";

// @ts-ignore
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
    return this.http.get(this.backEnd+"getMembers.php");
  }

  addNewMembers(person: any): Observable<any> {

    return this.http.post(this.backEnd+"addNewMembers.php", person, {headers: this.getHeader()})
  }

  test() {
    return this.http.post(this.backEnd+"api.php", {"me": 0});
  }

  login(info: any): Observable<any> {
    return this.http.post(this.backEnd+"login.php", info)
  }

  sendEmail(mails: any): Observable<any> {
    return this.http.post(this.backEnd+"login.php", mails)
  }

  updateScore(obj: any): Observable<any> {
    return this.http.post(this.backEnd+"updateScore.php", obj);
  }

  getNewSore(obj: any): Observable<any> {
    return this.http.post(this.backEnd+"score.php", obj);

  }

  passToIneterview(obj: any): Observable<any> {
    return this.http.post(this.backEnd+"updateForInterview.php", obj);

  }

  sendManyMails(obj: any): Observable<any> {
    return this.http.post(this.backEnd+"sendManyEmails.php", obj);
  }

  sendEmailAndUpdateState(obj: any): Observable<any> {
    return this.http.post(this.backEnd+"sendEmailAndUpdateState.php", obj);
  }

  getAllEvents(): Observable<any> {
    return this.http.get(this.backEnd+"allEvents.php");
  }

  getOpenEvents(): Observable<any> {
    return this.http.get(this.backEnd+"openEvents.php");
  }

  EventInscriptions(obj: any): Observable<any> {
    return this.http.post(this.backEnd+"eventDetails.php", obj);
  }

  newEvent(obj: any): Observable<any> {
    return this.http.post(this.backEnd+"newEvent.php", obj);
  }

  inscription(person: any): Observable<any> {
    return this.http.post(this.backEnd+"inscription.php", person);
  }

  addNewMemberToPole(obj: any): Observable<any> {
    return this.http.post(this.backEnd+"addNewMemberToPole.php", obj);
  }

  getMembersByPoles(): Observable<any> {
    return this.http.get(this.backEnd+"getMembersByPoles.php");
  }

}
