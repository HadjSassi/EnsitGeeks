import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit {
img1:String="../../assets/img/geeky blind.png";
img2:String="../../assets/img/geeky eyes.png";
  constructor(private router:Router) { }
  navigate(){
    this.router.navigate(['Acceuil']);
  }
  ngOnInit(): void {
  }

}
