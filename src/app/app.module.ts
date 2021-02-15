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
    MatTableModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
