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

  showMenu(){
    const menuButton = document.querySelector('button.mobile-menu');
    const menu = document.querySelector('ul');

    if (menu.className !== 'mobile') {
      menu.setAttribute('class', 'mobile');
      menu.style.animation = 'slide 0.5s';
    }
    else {
      menu.style.animation = 'slideOut 1s';
      setTimeout(
        function() {
          menu.classList.remove('mobile');
        }, 500);
    }
  }
}
