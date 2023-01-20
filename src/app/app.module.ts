import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { Page404Component } from './page404/page404.component';
import { ContactComponent } from './contact/contact.component';
import { JoinComponent } from './join/join.component';
import { LoginComponent } from './login/login.component';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Nav2Component } from './nav2/nav2.component';
import { HttpClientModule } from '@angular/common/http';
import { MainPaigeComponent } from './main-paige/main-paige.component';
import { NewMembersComponent } from './new-members/new-members.component';
import { EventComponent } from './event/event.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { GeeksbureauComponent } from './geeksbureau/geeksbureau.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MembersInEventComponent } from './members-in-event/members-in-event.component';
import { EndInscriptionComponent } from './end-inscription/end-inscription.component';
import { SubsecriptionComponent } from './subsecription/subsecription.component';
import { PoleDevisionComponent } from './pole-devision/pole-devision.component';
import { CardComponent } from './card/card.component';
import { OldMembersJoinUsComponent } from './old-members-join-us/old-members-join-us.component';
import { PoledetailsComponent } from './poledetails/poledetails.component';
import {HeaderComponent} from "./header/header.component";



@NgModule({
  declarations: [

    AppComponent,
    EventComponent ,
    NewMembersComponent,
    EventDetailComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    AcceuilComponent,
    Page404Component,
    ContactComponent,
    JoinComponent,
    LoginComponent,
    Nav2Component,
    MainPaigeComponent,
    GeeksbureauComponent,
    MembersInEventComponent,
    EndInscriptionComponent,
    SubsecriptionComponent,
    PoleDevisionComponent,
    CardComponent,
    OldMembersJoinUsComponent,
    PoledetailsComponent
  ],
  imports: [
    MatSidenavModule,
    BrowserModule,
    FormsModule ,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,MatTableModule,HttpClientModule,MatDialogModule,MatFormFieldModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,HttpClientModule, BrowserAnimationsModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' },{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
