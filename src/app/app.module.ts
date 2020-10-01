import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FilterComponent } from './components/filter/filter.component';
import { CommonModule } from '@angular/common';
import { LaunchProgramComponent } from './components/launch-program/launch-program.component';
import { OrderPipe } from './pipes/order.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FilterComponent,
    LaunchProgramComponent,
    OrderPipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
