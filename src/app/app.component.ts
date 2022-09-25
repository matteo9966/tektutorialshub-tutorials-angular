import { AfterViewInit, Component, VERSION, ViewChild } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  @ViewChild('firstChild', { static: false }) firstChild: CardComponent;


}
