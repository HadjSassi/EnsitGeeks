import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AcceuilComponent} from './acceuil/acceuil.component';
import {ApiService} from './api.service';
import {ContactComponent} from './contact/contact.component';
import {EndInscriptionComponent} from './end-inscription/end-inscription.component';
import {GeeksbureauComponent} from './geeksbureau/geeksbureau.component';
import {OldMembersJoinUsComponent} from './old-members-join-us/old-members-join-us.component';
import {Page404Component} from './page404/page404.component';
import {SubsecriptionComponent} from './subsecription/subsecription.component';
import {StoreComponent} from "./store/store.component";
import {ItemComponent} from "./item/item.component";
import {CommandComponent} from "./command/command.component";

const routes: Routes = [

  {path: '', pathMatch: 'full', component: AcceuilComponent},
  {path: 'Acceuil', pathMatch: 'full', component: AcceuilComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'JoinUs', component: OldMembersJoinUsComponent},
  {path: 'Store', component: StoreComponent},
  {path: 'geeks-club-bureau-log-in', component: GeeksbureauComponent},
  {path: 'new-members', component: OldMembersJoinUsComponent},
  {path: "event/:id", component: SubsecriptionComponent},
  {path: "Item/:id", component: ItemComponent},
  {path: "command/:id/:nb/:size/:color", component: CommandComponent},
  {path: '**', component: Page404Component}

];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private service: ApiService) {
  }
}



