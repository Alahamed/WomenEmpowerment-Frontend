import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LeftbarComponent } from './Components/leftbar/leftbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { EventsComponent } from './Pages/events/events.component';
import { AcceuilComponent } from './Pages/acceuil/acceuil.component';
import {HttpClientModule} from "@angular/common/http";
import { CreatePostComponent } from './Pages/create-post/create-post.component';
import { UpdatePostComponent } from './Pages/update-post/update-post.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LeftbarComponent,
    FooterComponent,
    EventsComponent,
    AcceuilComponent,
    CreatePostComponent,
    UpdatePostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
