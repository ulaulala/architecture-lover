import {Component, Input, OnInit} from '@angular/core';
import {Header} from '../../model/header.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  public header: Header;

  ngOnInit() {
  }

}
