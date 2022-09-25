import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './Banner.component.html',
  styleUrls: ['./Banner.style.css'],
})
export class BannerComponent implements OnInit {
  constructor(private renderer: Renderer2) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.renderer.removeClass(this.banner.nativeElement, 'hidden-bottom');
    }, 500);
  }
  @ViewChild('banner') banner: ElementRef;
}
