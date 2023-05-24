import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {LayoutModule} from "./layout/layout.module";
import { ModalComponent } from './modal/modal.component';
import { CreateComponent } from './forms/create/create.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    CreateComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LayoutModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
