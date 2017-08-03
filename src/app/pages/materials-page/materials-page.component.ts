import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {Header} from '../../model/header.model';

@Component({
  selector: 'app-materials-page',
  templateUrl: './materials-page.component.html',
  styleUrls: ['./materials-page.component.scss'],
  providers: [HeaderComponent]
})
export class MaterialsPageComponent implements OnInit {

  pageHeader: Header;

  ngOnInit() {
    this.pageHeader = { logo: 'logo-back', pageTitle: 'Materials'};
  }

}
