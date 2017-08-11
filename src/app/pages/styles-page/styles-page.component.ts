import { Component, OnInit } from '@angular/core';
import { Header } from '../../model/header.model';
import { HeaderComponent } from '../header/header.component';
import {Style} from '../../model/style.model';

@Component({
  selector: 'app-styles-page',
  templateUrl: './styles-page.component.html',
  styleUrls: ['./styles-page.component.scss'],
  providers: [HeaderComponent]
})
export class StylesPageComponent implements OnInit {

  pageHeader: Header;
  styles: Style[];
  exampleDesc: string;

  ngOnInit() {
    this.pageHeader = { logo: 'logo-back', pageTitle: 'Styles'};
    this.exampleDesc = 'The observation that old windows are sometimes found to be thicker at the bottom than at the top is often offered as supporting evidence for the view that glass flows over a timescale of centuries, the assumption being that the glass has exhibited the liquid property of flowing from one shape to another.\n';
    this.styles = [
      { name: 'Modern', imageUrl: '../../assets/img/modern-s.jpg', description: this.exampleDesc },
      { name: 'Industrial', imageUrl: '../../assets/img/industrial-s.jpg', description: this.exampleDesc },
      { name: 'Baroque', imageUrl: '../../assets/img/baroque-s.jpg', description: this.exampleDesc },
      { name: 'Gothic', imageUrl: '../../assets/img/gothic-s.jpg', description: this.exampleDesc }
    ];
  }

  showDescription(index: number) {
    const descriptions = document.querySelectorAll('.description');
    if ((descriptions[index] as HTMLElement).style.display === 'block') {
      (descriptions[index] as HTMLElement).style.display = 'none';
    } else {
      (descriptions[index] as HTMLElement).style.display = 'block';
    }
  }
}
