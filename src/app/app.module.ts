import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { CardComponent } from './components/card/card.component';
import { MenuComponent } from './components/menu/menu.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    CardComponent,
    MenuComponent,
    BigCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
