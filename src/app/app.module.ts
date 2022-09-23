import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BgColorDirective } from '../color/color.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, CardComponent, BgColorDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
