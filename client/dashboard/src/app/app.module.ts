import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersCounterComponent } from './users-counter/users-counter.component';
//users-angular
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
//angular
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { OverviewComponent } from './components/overview/overview.component';
//angular
const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} };
//users-angular
@NgModule({
  declarations: [
    AppComponent,
    UsersCounterComponent,
    ProductsComponent,
    OverviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }