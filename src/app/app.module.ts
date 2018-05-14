import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { SmartTypeboxComponent } from './smart-typebox/smart-typebox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomChangerComponent } from './dom-changer/dom-changer.component';

import { DataService } from './service/data.service';
import { Http, HttpModule } from '@angular/http';

const appRoutes = [
    {path:'',component:SmartTypeboxComponent},
    {path:'domChanger',component:DomChangerComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    SmartTypeboxComponent,
    DomChangerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
