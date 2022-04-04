import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Component1Component } from './component1/component1.component';
import { RootComponent } from './root/root.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Component1Component,
    RootComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
