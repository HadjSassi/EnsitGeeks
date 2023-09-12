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
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Nav2Component } from './nav2/nav2.component';
import { HttpClientModule } from '@angular/common/http';
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
import { OldMembersJoinUsComponent } from './old-members-join-us/old-members-join-us.component';
import {HeaderComponent} from "./header/header.component";
import { StoreComponent } from './store/store.component';
import {RatingModule} from "primeng/rating";
import {MatIconModule} from "@angular/material/icon";
import {MatSliderModule} from "@angular/material/slider";
import {MatDividerModule} from "@angular/material/divider";
import {MatBadgeModule} from "@angular/material/badge";
import { ItemComponent } from './item/item.component';
import { CommandComponent } from './command/command.component';



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
    Nav2Component,
    GeeksbureauComponent,
    MembersInEventComponent,
    EndInscriptionComponent,
    SubsecriptionComponent,
    OldMembersJoinUsComponent,
    StoreComponent,
    ItemComponent,
    CommandComponent,
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
    FormsModule,HttpClientModule, BrowserAnimationsModule,
    RatingModule,
    MatIconModule,
    MatBadgeModule,
    MatDividerModule,
    MatSliderModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' },{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
