import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api.service';
import { MembersInEventComponent } from '../members-in-event/members-in-event.component';
 let ELEMENT_DATA:any[] = [];

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  subject:string="";
  content:string="";
  index=0;
  nbnumber=0
  dataSource :any;
  showFiller = false;
  obj:any=[];
  listStates:String[]=[];
  emailList:String[]=[];
  displayedColumns: string[] = ['name','type', 'ouvert', 'ferme','max','detail'];

  constructor(public dialog: MatDialog,private service:ApiService) { }




  ngOnInit(): void {
    this.service.getAllEvents().subscribe(
      (res:any)=>{
        this.dataSource= new MatTableDataSource(res)
      },
      (err)=>{
        console.log(err);
      }
    )
    }



    openDialog(name:string,date1:string,date2:string) {
      MembersInEventComponent.event=name
      MembersInEventComponent.date1=date1
      MembersInEventComponent.date2=date2


      this.dialog.open(MembersInEventComponent);
    }


    logout(){
      localStorage.setItem("token","0");
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }


}

