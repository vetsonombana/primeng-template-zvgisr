import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {PanelMenuModule} from 'primeng/primeng';
import {MenuModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PasswordModule,
InputTextModule,


} from 'primeng/primeng';
@NgModule({
  imports:      [ BrowserModule, 
  BrowserAnimationsModule,
  FormsModule,
  PasswordModule,
  InputTextModule,
  PanelMenuModule,
  MenuModule
  
   ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
