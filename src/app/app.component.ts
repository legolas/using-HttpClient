import { Component } from '@angular/core';
import {Users} from "./users";
import {HttpClient} from "@angular/common/http";
import {ApicallService} from "./apicall.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: Users;

  constructor(public http: HttpClient, private apiService: ApicallService) {}

  ngOnInit() {
    this.getUserList();
  }

  private getUserList() {
    this.apiService
      .getUsers()
      .subscribe((data: any) => {
        console.info('users: ', data);
        this.users = data.data;
      })
  }
}
