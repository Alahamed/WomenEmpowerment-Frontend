import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './Pages/events/events.component';
import { HomeComponent } from './Pages/home/home.component';
import {AcceuilComponent} from "./Pages/acceuil/acceuil.component";
import {CreatePostComponent} from "./Pages/create-post/create-post.component";
import {UpdatePostComponent} from "./Pages/update-post/update-post.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [{ path: 'events', component: EventsComponent } ,
      {path: 'acceuil', component: AcceuilComponent ,
        children:[{path:'create-post' , component:CreatePostComponent}
          ,{path:'update-post/:idPublication' , component:UpdatePostComponent}]}],

  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
 // {path:'create-post' , component:CreatePostComponent},
 // {path:'update-post/:idPublication' , component:UpdatePostComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
