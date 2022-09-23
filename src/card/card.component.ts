import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  templateUrl: './card.component.html',
  selector: 'app-card',
  styleUrls: ['./card.style.css'],
})
export class CardComponent implements OnInit {
  ngOnInit(): void {}
  constructor() {}
  @Input() shapeTemplate!: TemplateRef<HTMLElement>;
}
