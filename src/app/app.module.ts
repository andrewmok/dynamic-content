import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardWrapperComponent } from './card-wrapper/card-wrapper.component';
import { DataCardComponent } from './data-card/data-card.component';
import { DescriptionCardComponent } from './description-card/description-card.component';
import { DynamicContentPageComponent } from './dynamic-content-page/dynamic-content-page.component';
import {AdDirective} from './card-wrapper/ad.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardWrapperComponent,
    DataCardComponent,
    DescriptionCardComponent,
    DynamicContentPageComponent,
    AdDirective,
  ],
  entryComponents: [
    DataCardComponent,
    DescriptionCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
