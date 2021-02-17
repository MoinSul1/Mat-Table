import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable, interval } from 'rxjs';
import { of } from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import { User } from '../../user.model';
import {MatSlideToggleChange} from "@angular/material/slide-toggle";
import { NgxSpinnerService } from "ngx-spinner";
import { MatTableDataSource } from '@angular/material/table'


@Component({
  selector: 'usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  mymodel= false;
  autoRefresh:any = "false";
  clearIntervalId: any;

 // dataSource = new UserDataSource(this.userService);
 dataSource= new MatTableDataSource<User>()
  displayedColumns = ['name', 'email', 'phone', 'company'];
  constructor(private userService: UserService,private spinner: NgxSpinnerService) { 
    // this.userService.getUser().subscribe ( users => {
    //   this.dataSource.data = users;
    // })

  }

  
  ngOnInit() {this.spinner.show();
    this.refresh()
//     setTimeout(() => {
//       this.spinner.hide();
//  }, 1000);
    

    if (localStorage.getItem("autoRefresh")) {
      this.autoRefresh = localStorage.getItem("autoRefresh");
    }
    if(this.autoRefresh === 'true'){
      this.manageAutoRefresh()}
  }


  autoRefreshToggleHandler(event: MatSlideToggleChange) {
    event.checked ? (this.autoRefresh = "true") : (this.autoRefresh = "false");
    localStorage.setItem("autoRefresh", this.autoRefresh);
    this.manageAutoRefresh();
  }

  manageAutoRefresh() {
    if (this.autoRefresh == "true") {
      this.clearIntervalId = setInterval(() => {
        // window.location.reload()
        this.refresh()
        this.spinner.show();
    }, 6000);
  } else {
    clearInterval(this.clearIntervalId);
  }
  }


  refresh() {
    this.userService.getUser().subscribe ( users => {
      this.dataSource.data = users;
      this.spinner.hide();
    });
  }

}
export class UserDataSource extends DataSource<any> {
  constructor(private userService: UserService) {
    super();
  }

  connect(): Observable<User[]> {

    return this.userService.getUser();
    
  }
 
  disconnect() {}
}