import { Component, OnInit, AfterViewInit } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {Header} from '../../model/header.model';
import {Material} from '../../model/material.model';

@Component({
  selector: 'app-materials-page',
  templateUrl: './materials-page.component.html',
  styleUrls: ['./materials-page.component.scss'],
  providers: [HeaderComponent]
})
export class MaterialsPageComponent implements OnInit, AfterViewInit {

  pageHeader: Header;
  materials: Material[];

  ngOnInit() {
    this.pageHeader = { logo: 'logo-back', pageTitle: 'Materials'};
    this.materials = [
      {
        name: 'brick',
        description: 'He must have tried it a hundred times, shut his eyes so that he wouldn\'t have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before. \"Oh, God\", he thought, \"what a strenuous career it is that I\'ve chosen! Travelling day in and day out. He must have tried it a hundred times, shut his eyes so that he wouldn\'t have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before. \"Oh, God\", he thought, \"what a strenuous career it is that I\'ve chosen! Travelling day in and day out.'
      },
      {
        name: 'glass',
        description: 'Doing business like this takes much more effort than doing your own business at home, and on top of that there\'s the curse of travelling, worries about making train connections, bad and irregular food, contact with different people all the time so that you can never get to know anyone or become friendly with them. It can all go to Hell! Doing business like this takes much more effort than doing your own business at home, and on top of that there\'s the curse of travelling, worries about making train connections, bad and irregular food, contact with different people all the time so that you can never get to know anyone or become friendly with them. It can all go to Hell!'
      },
      {
        name: 'marble',
        description: 'Amazingly few discotheques provide jukeboxes. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. Big July earthquakes confound zany experimental vow. Foxy parsons quiz and cajole the lovably dim wiki-girl. Have a pick: twenty six letters - no forcing a jumbled quiz!' +
        'Amazingly few discotheques provide jukeboxes. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. Big July earthquakes confound zany experimental vow. Foxy parsons quiz and cajole the lovably dim wiki-girl. Have a pick: twenty six letters - no forcing a jumbled quiz!'
      }
    ];
  }
  ngAfterViewInit() {
    this.changeContent(0);
  }

  changeContent(index: number) {
    document.querySelector('.description h3').textContent = this.capitalize(this.materials[index].name);
    document.querySelector('.description p').textContent = this.materials[index].description;
    this.lastClicked(index);
  }
  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  private lastClicked(currentIndex: number) {
    const categories =  document.querySelectorAll('.materials li');
    for (let j = 0; j < categories.length; j++) {
      if (j === currentIndex) {
        (categories[j] as HTMLElement).style.opacity = '1';
        console.log(currentIndex);
      } else {
        (categories[j] as HTMLElement).style.opacity = '0.5';
      }
    }
  }

}
