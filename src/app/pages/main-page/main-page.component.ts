import { Component, OnInit } from '@angular/core';
import { Header } from '../../model/header.model';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  providers: [HeaderComponent]
})
export class MainPageComponent implements OnInit {

  pageHeader: Header;

  ngOnInit() {
    this.pageHeader = { logo: 'logo', pageTitle: ''};
  }

}
