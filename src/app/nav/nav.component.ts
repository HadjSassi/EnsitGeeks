import { Component, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnChanges {
activated:boolean=false;
click:boolean=true;
navig:boolean=true;
logo :String="../../assets/img/logo-geeks.png";
@Input() url="" ; 
hid=false
constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if(changes["url"].currentValue.indexOf("/dashbord")!=-1){
      this.hid=true
    }
    else {
      this.hid=false
    }
  
  }
  change:boolean=false;
  activer(){
   this.activated=!(this.activated);
   this.click=!this.click;
   this.navig=!this.navig;
  }

  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    this.change=true;
    else
    this.change=false;
  }
  onNotif(){
    this.click=!this.click;
    this.activated=!this.activated;
    this.navig=!this.navig;
  }
  onNotif2(){
this.navig=!this.navig;
this.click=!this.click;
this.activated=!this.activated;
  }
}
