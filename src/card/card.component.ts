import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  templateUrl: './card.component.html',
  selector: 'app-card',
  styleUrls: ['./card.style.css'],
})
export class CardComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {}
  constructor() {}
  @Input() shapeTemplate!: TemplateRef<HTMLElement>;
  @ViewChild('sottotitolo') sottotitolo: ElementRef;
  ngAfterViewInit() {
    this.sottotitolo.nativeElement.innerHTML = 'title after view Init';
  }
}
