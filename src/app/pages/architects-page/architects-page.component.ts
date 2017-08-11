import { Component, OnInit, AfterViewInit } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {Header} from '../../model/header.model';
import {Architect} from '../../model/architect.model';

@Component({
  selector: 'app-architects-page',
  templateUrl: './architects-page.component.html',
  styleUrls: ['./architects-page.component.scss'],
  providers: [HeaderComponent]
})
export class ArchitectsPageComponent implements OnInit, AfterViewInit {

  pageHeader: Header;
  architects: Architect[];

  ngOnInit() {
    this.pageHeader = { logo: 'logo-back', pageTitle: 'Architects'};
    this.architects = [
      {
        name: 'Daniel Libeskind',
        portraitUrl: '../../../assets/img/man1.jpg',
        description: 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.' +
        'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.'
      },
      {
        name: 'Richard Meier',
        portraitUrl: '../../../assets/img/man2.jpg',
        description: 'His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. \"What\'s happened to me? \" he thought. It wasn\'t a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.' +
        'His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. \"What\'s happened to me? \" he thought. It wasn\'t a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.'
      },
      {
        name: 'Sir Norman Foster',
        portraitUrl: '../../../assets/img/man3.jpg',
        description: 'A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer.' +
        'A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer.'
      },
      {
        name: 'Renzo Piano',
        portraitUrl: '../../../assets/img/man4.jpg',
        description: 'Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad. \"How about if I sleep a little bit longer and forget all this nonsense\", he thought, but that was something he was unable to do because he was used to sleeping on his right, and in his present state couldn\'t get into that position.' +
        'Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad. \"How about if I sleep a little bit longer and forget all this nonsense\", he thought, but that was something he was unable to do because he was used to sleeping on his right, and in his present state couldn\'t get into that position.'
      },
      {
        name: 'Santiago Calatrava',
        portraitUrl: '../../../assets/img/man5.jpg',
        description: 'However hard he threw himself onto his right, he always rolled back to where he was. He must have tried it a hundred times, shut his eyes so that he wouldn\'t have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before. \"Oh, God\", he thought, \"what a strenuous career it is that I\'ve chosen!' +
        'However hard he threw himself onto his right, he always rolled back to where he was. He must have tried it a hundred times, shut his eyes so that he wouldn\'t have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before. \"Oh, God\", he thought, \"what a strenuous career it is that I\'ve chosen!'
      }
    ];
  }
  ngAfterViewInit() {
    this.changeContent(0);
  }

  changeContent(index: number) {
    document.querySelector('.description h3').textContent = this.architects[index].name;
    document.querySelector('.description p').textContent = this.architects[index].description;
    this.lastClicked(index);
  }
  private lastClicked(currentIndex: number) {
    const portraits =  document.querySelectorAll('.architects li');
    for (let j = 0; j < portraits.length; j++) {
      if (j === currentIndex) {
        (portraits[j] as HTMLElement).style.opacity = '1';
        console.log(currentIndex);
      } else {
        (portraits[j] as HTMLElement).style.opacity = '0.5';
      }
    }
  }
}

