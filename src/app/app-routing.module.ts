import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ApiService } from './api.service';
import { AuthentificationGuard, DontPasseGuard } from './authentification.guard';
import { ContactComponent } from './contact/contact.component';
import { EndInscriptionComponent } from './end-inscription/end-inscription.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventComponent } from './event/event.component';
import { GeeksbureauComponent } from './geeksbureau/geeksbureau.component';
import { JoinComponent } from './join/join.component';
import { LoginComponent } from './login/login.component';
import { MainPaigeComponent } from './main-paige/main-paige.component';
import { NewMembersComponent } from './new-members/new-members.component';
import { OldMembersJoinUsComponent } from './old-members-join-us/old-members-join-us.component';
import { Page404Component } from './page404/page404.component';
import { PoleDevisionComponent } from './pole-devision/pole-devision.component';
import { info } from './app.component';
import { MembersInEventComponent } from './members-in-event/members-in-event.component';
import { SubsecriptionComponent } from './subsecription/subsecription.component';
import { PoledetailsComponent } from './poledetails/poledetails.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', component: AcceuilComponent },
  { path: 'Acceuil', pathMatch: 'full', component: AcceuilComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'JoinUs', component: EndInscriptionComponent },
  { path: 'Member', component: LoginComponent },
  { path:'geeks-club-bureau-log-in',component:GeeksbureauComponent},
  { path:'new-members',component:OldMembersJoinUsComponent},
  { path:'geekshack-poles',component:PoleDevisionComponent},
  { path:"event/:id",component:SubsecriptionComponent},
  { path:"dashbord",children:[

    {
      path:'', component: MainPaigeComponent
    },
    {
      path:'pole',component:PoledetailsComponent
    }
    ,
    {
      path:'event', component: EventComponent
    },
    {
      path:'event-detail', component: EventDetailComponent
    },

  ]
},
{ path: '**', component: Page404Component }

  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
    constructor(private service:ApiService){
  }
}



