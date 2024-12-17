import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TemplateFormModule } from './template-form/template-form.module';
import { DataDrivenModule } from './data-driven/data-driven.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TemplateFormModule,
    DataDrivenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
