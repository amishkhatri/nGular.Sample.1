import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { FormComponentComponent } from './form-component/form-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    FormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
