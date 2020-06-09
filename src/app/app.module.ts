import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PizzaMainComponent } from './pizza-main/pizza-main.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { DragElementsComponent} from './drag-elements/drag-elements.component';


@NgModule({
  declarations: [
    AppComponent,
    PizzaMainComponent,
    KitchenComponent,
    DragElementsComponent,
   
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
