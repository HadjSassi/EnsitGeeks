import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {NewMembersComponent} from '../new-members/new-members.component';
import {ApiService} from '../api.service';
import {NgForm} from '@angular/forms';


let ELEMENT_DATA: any[] = [];

@Component({
  selector: 'app-main-paige',
  templateUrl: './main-paige.component.html',
  styleUrls: ['./main-paige.component.css']
})
export class MainPaigeComponent implements OnInit {
  infoCards = ["Confirmed Members", "Old Members", "Not Confirmed"]
  nbMembers = [0, 0, 0]
  subject: string = "";
  content: string = "";
  index = 0;
  dataSource: any;
  showFiller = false;

  obj: any = [];
  buttonDisabled: boolean = false;
  listStates: String[] = [];
  emailList: String[] = [];
  displayedColumns: string[] = ['num', 'check', 'name', 'prename', 'email', 'phone', 'state', 'detail', 'action'];

  constructor(public dialog: MatDialog, private service: ApiService) {
  }


  deferent() {
    for (let i = 0; i < this.listStates.length; i++) {
      if (this.listStates[i] != this.listStates[0]) {
        return true
      }
    }
    return false
  }


  addMeToList(name: any, prename: any, mail: any, states: any) {
    let i;
    if (this.emailList.indexOf(mail) != -1) {
      i = this.emailList.indexOf(mail)
      this.emailList.splice(i, 1)
      this.obj.splice(i, 1);
      this.listStates.splice(i, 1);
    } else {
      this.emailList.push(mail)
      this.obj.push({
        'name': name,
        'prename': prename,
        'states': states,
        'email': mail
      })
      this.listStates.push(states);
    }
    this.buttonEtat();
  }


  buttonEtat() {
    if (this.emailList.length != 0) {
      this.buttonDisabled = false;
    } else {
      this.buttonDisabled = true;
    }
  }


  ngOnInit(): void {
    this.service.getAllMembers().subscribe(
      (res: any) => {
        let i = 0;
        console.log(res["data"])
        for (let elt of res["data"]) {
          elt["num"] = i
          ELEMENT_DATA.push(elt);
          i++;
          if (elt["states"] == "member(payed)") {
            this.nbMembers[0]++;
          } else if (elt["states"] == "old") {
            this.nbMembers[1]++;
          } else {
            this.nbMembers[2]++;

          }
        }

        this.dataSource = new MatTableDataSource(ELEMENT_DATA)
        console.log(this.dataSource)
      },
      (err) => {
        console.log(err);
      }
    )
  }


  openDialog(mail: string, name: string, prename: string, skills: string, dep: string, stars: string) {
    localStorage.setItem("mail", mail);
    localStorage.setItem("prename", prename);
    localStorage.setItem("name", name);
    localStorage.setItem("skills", skills);
    localStorage.setItem("dep", dep);
    console.log(mail)

    this.dialog.open(NewMembersComponent);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  logout() {
    localStorage.setItem("token", "0");
  }

  sendMails(form: NgForm) {
    console.log(form.value)
    console.log({"email": form.value["mail"], "subject": form.value["subject"], "data": this.obj})
    this.service.sendManyMails({
      "email": form.value["mail"],
      "subject": form.value["subject"],
      "data": this.obj
    }).subscribe(
      (res: any) => {

        console.log(res["sendMany"])
        alert("Mails have been sent")
        location.reload();

      }
      ,
      (err) => {
        console.log(err);
      }
    )
  }

  passInter(etat: any) {
    if (etat == "to interview") {
      return false
    }
    return true
  }

  confirmer(etat: any) {
    if (etat == "passe interview(not payed)") {
      return false
    }
    return true
  }

  sendEmailForConfirmation(email: string, name: string, prename: string) {
    this.service.sendEmailAndUpdateState({
      "name": name,
      "prename": prename,
      "email": email,
      "states": "passe interview(not payed)",
      "body": "Congratulations <br> Ensit Geeks club informs you that you are officially a member in our Club.<br>Cordially.",
      "subject": "Confirmation"
    }).subscribe(
      (res: any) => {
        if (res["send"] == "success") {
          alert("the confirmation mail has been sent to " + name + " " + prename)
          ELEMENT_DATA = []
          this.ngOnInit()

        } else {
          alert("the confirmation was't sent to " + name + " " + prename)
        }
      }
      , (err) => {
        console.log(err)
      }
    )

  }

  sendEmailForPassInterview(email: string, name: string, prename: string) {

    this.service.sendEmailAndUpdateState({
      "name": name,
      "prename": prename,
      "email": email,
      "states": "to interview",
      "body": "Congratulations <br>Ensit Geeks club informs you that you pass the interview successfully  !<br>you only have to pay the '20d' registration fee to become an official member of our club.<br>Cordially.",
      "subject": "Pass the interview"
    }).subscribe(
      (res: any) => {
        if (res["send"] == "success") {
          alert("the pass interview mail has been sent to " + name + " " + prename)
          ELEMENT_DATA = []
          this.ngOnInit()
        } else {
          alert("the pass interview was't sent to " + name + " " + prename)
        }
      }
      , (err) => {
        console.log(err)
      }
    )

  }
}
