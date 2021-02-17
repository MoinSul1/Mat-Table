import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewcompComponent } from './newcomp/newcomp.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { UsertableComponent } from './components/usertable/usertable.component';
import { MatTableModule } from '@angular/material/table';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    NewcompComponent,
    FirstComponent,
    SecondComponent,
    UsertableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatSlideToggleModule,BrowserAnimationsModule,
    FormsModule,
    NgxSpinnerModule
   
    
   
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
