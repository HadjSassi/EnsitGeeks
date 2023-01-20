import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api.service';
let logistique=[]
let media=[]
let marketing=[]
let sponsoring=[]

@Component({
  selector: 'app-poledetails',
  templateUrl: './poledetails.component.html',
  styleUrls: ['./poledetails.component.scss']
})
export class PoledetailsComponent implements OnInit {
  tabPoles=["Marketing","Media","Logistique","Sponsoring"]
  displayedColumns: string[] = ['name','prename', 'email', 'phone'];
  exist=false
  tabnbPoles=[]
  tabdataPoles=[]
  title=""
  dataSource :any;
  constructor(private service:ApiService) { }

  logout(){
    localStorage.setItem("token","0");
  }

  ngOnInit(): void {
    this.service.getMembersByPoles().subscribe(
      (res)=>{
        console.log(res)
        logistique=res["logistique"]
        media=res["media"]
        sponsoring=res["sponsoring"]
        marketing=res["marketing"]
        // @ts-ignore
        this.tabdataPoles=[marketing,media,sponsoring,logistique]
        // @ts-ignore
        this.tabnbPoles=[marketing.length,media.length,sponsoring.length,logistique.length]

      },
      (err)=>{
        console.log(err)
      }
      )

  }
  generateTab(index:string){
    let x=parseInt(index)
    this.title=this.tabPoles[x]
    this.exist=true
    if(this.tabnbPoles[x]>0){
      this.dataSource= new MatTableDataSource(this.tabdataPoles[x])
    }
    else{
      this.dataSource= new MatTableDataSource([])

    }
  }

}
