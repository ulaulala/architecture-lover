import { Component, OnInit } from '@angular/core';
import { Header } from '../../model/header.model';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-styles-page',
  templateUrl: './styles-page.component.html',
  styleUrls: ['./styles-page.component.scss'],
  providers: [HeaderComponent]
})
export class StylesPageComponent implements OnInit {

  pageHeader: Header;

  ngOnInit() {
    this.pageHeader = { logo: 'logo-back', pageTitle: 'Styles'};
  }

}
