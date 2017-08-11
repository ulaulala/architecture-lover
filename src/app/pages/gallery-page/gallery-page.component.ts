import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {Header} from '../../model/header.model';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss'],
  providers: [HeaderComponent]
})
export class GalleryPageComponent implements OnInit {

  pageHeader: Header;
  imageUrls: string[];

  ngOnInit() {
    this.pageHeader = { logo: 'logo-back', pageTitle: 'Gallery'};
    this.imageUrls = [
      '../../../assets/img/man1.jpg',
      '../../../assets/img/photo-main-little1.png',
      '',
      '../../../assets/img/photo-main-large.png',
      '../../../assets/img/glass.jpg',
      '../../../assets/img/marble.jpg',
      '',
      '../../../assets/img/man2.jpg',
      '../../../assets/img/brick.jpg',
      '../../../assets/img/man3.jpg',
      '',
      '../../../assets/img/photo-main-little2.png',
      '../../../assets/img/photo-main-little1.png',
      '../../../assets/img/man4.jpg',
      '',
      '../../../assets/img/photo-main-medium.png',
      '../../../assets/img/glass.jpg',
      '../../../assets/img/man5.jpg'
    ];
  }

  showImage(index: number) {
    const modal = document.querySelector('.modal') as HTMLElement;

    modal.style.display = 'flex';
    const modalImg = document.querySelector('.modal .main-image') as HTMLImageElement;
    modalImg.src = this.imageUrls[index];

    const close = document.querySelector('.close');
    close.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  }
}
