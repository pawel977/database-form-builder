import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HeaderComponent } from './main-content/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
