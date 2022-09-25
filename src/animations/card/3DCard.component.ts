import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-3d-card',
  templateUrl: './3DCard.component.html',
  styleUrls: ['./3DCard.style.css'],
  animations: [
    trigger('cardFlip', [
      state(
        'default',
        style({
          transform: 'none',
        })
      ),
      state(
        'flipped',
        style({
          transform: 'rotateY(180deg)',
        })
      ),
      transition('default=>flipped', [animate('400ms')]),
      transition('flipped=>default', [animate('200ms')]),
    ]),
  ],
})
export class TDCardComponent {
  data = { state: 'default' };

  cardClicked() {
    this.data.state = this.data.state === 'default' ? 'flipped' : 'default';
  }
}
