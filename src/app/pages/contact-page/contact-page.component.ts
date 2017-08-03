import { Component, OnInit } from '@angular/core';
import {Header} from '../../model/header.model';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
  providers: [HeaderComponent]
})
export class ContactPageComponent implements OnInit {

  pageHeader: Header;

  ngOnInit() {
    this.pageHeader = { logo: 'logo-back', pageTitle: 'Contact'};
  }

}
