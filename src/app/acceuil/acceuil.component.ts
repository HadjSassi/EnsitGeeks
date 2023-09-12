import { Component, OnInit } from '@angular/core';
// @ts-ignore
import AOS from 'aos';

declare const Typed:any;

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss','./acceuil.component1.scss','./acceuil.component2.scss','./acceuil.component3.scss','./acceuil.component4.scss','./acceuil.component5.scss']
})
export class AcceuilComponent implements OnInit {
logo :String="../../assets/img/logo-geeks.png";
team:String="../../assets/img/158107685_777970536431268_7787482103234914082_n (2).jpg";

  constructor() { }

  ngOnInit(): void {
    AOS.init();

    let typed = new Typed(".typing", {
      strings: ["ENSIT GEEKS Club","Debug Your skills", "Compile your World ","Be Unique !"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });


  }

}
