import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaiComponent } from './mai/mai.component';
import { OptionComponent } from './option/option.component';

@NgModule({
  declarations: [
    AppComponent,
    MaiComponent,
    OptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
