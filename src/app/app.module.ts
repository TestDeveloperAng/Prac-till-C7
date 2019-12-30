import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BasicHighlightDirective } from './shared/basic-highlight.directive';
import { BetterhighlightDirective } from './shared/betterhighlight.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, BasicHighlightDirective, BetterhighlightDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
