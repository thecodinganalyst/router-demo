import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThisComponent } from './this/this.component';
import { ThatComponent } from './that/that.component';

@NgModule({
  declarations: [
    AppComponent,
    ThisComponent,
    ThatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
