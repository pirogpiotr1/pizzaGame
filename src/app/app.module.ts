import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PizzaMainComponent } from './pizza-main/pizza-main.component';
import { KitchenComponent } from './kitchen/kitchen.component';


@NgModule({
  declarations: [
    AppComponent,
    PizzaMainComponent,
    KitchenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
