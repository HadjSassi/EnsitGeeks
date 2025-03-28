import { Component, OnInit,EventEmitter,Output } from '@angular/core';
// @ts-ignore
import { Router } from '@angular/router';

// @ts-ignore
@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.scss']
})
export class Nav2Component implements OnInit {

  @Output() notif=new EventEmitter();
  @Output() notif2=new EventEmitter();
  constructor(private router:Router) { }
 goJoin(){
   this.router.navigate(["JoinUs"]);
 }
 goMember(){
  this.router.navigate(["Member"]);
}
goStore(){
  this.router.navigate(["Store"]);
}
goContact(){
  this.router.navigate(["Contact"]);
}
  ngOnInit(): void {
  }
}
