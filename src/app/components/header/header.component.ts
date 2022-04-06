import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = 'DEMO Streaming';
  subscribeTitle: string = 'Start your free trial';
  ctaTitleLogin: string = 'log in';
  ctaTitleLogOut: string = 'Log Out';

  constructor() { }

  ngOnInit(): void {
  }

}
