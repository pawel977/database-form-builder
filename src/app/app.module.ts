import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HeaderComponent } from './main-content/header/header.component';
import { MainComponent } from './main-content/main/main.component';
import { FormComponent } from './main-content/main/form/form.component';
import { FormOperationsService } from 'src/services/form-operations.service';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    HeaderComponent,
    MainComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    FormOperationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
