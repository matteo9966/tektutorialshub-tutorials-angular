import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BgColorDirective } from '../color/color.directive';
import { ShowDirective } from '../showDirective/show.directive';
import { BannerComponent } from '../animateComponent/Banner.component';
import { TDCardComponent } from '../animations/card/3DCard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CardComponent,
    BgColorDirective,
    ShowDirective,
    BannerComponent,
    TDCardComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
