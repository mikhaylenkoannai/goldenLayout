import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { GoldenLayoutModule } from 'ngx-golden-layout';
import { Component1Component } from './components/component1/component1.component';
import { TestComponent } from './components/test/test.component';
import { GL_COMPONENTS } from './shared/components';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Component1Component,
    RootComponent
  ],
  imports: [
    BrowserModule,
    GoldenLayoutModule.forRoot(GL_COMPONENTS),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
