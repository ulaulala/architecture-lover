import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {Header} from '../../model/header.model';

@Component({
  selector: 'app-architects-page',
  templateUrl: './architects-page.component.html',
  styleUrls: ['./architects-page.component.scss'],
  providers: [HeaderComponent]
})
export class ArchitectsPageComponent implements OnInit {

  pageHeader: Header;

  ngOnInit() {
    this.pageHeader = { logo: 'logo-back', pageTitle: 'Architects'};
  }

}
