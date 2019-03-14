import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { WidgetsInitializerComponent } from './components/widgets-initializer/widgets-initializer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WidgetComponent } from './components/widgets/widget/widget.component';
import { SectionComponent } from './components/widgets/widget/section/section.component';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    WidgetsComponent,
    WidgetsInitializerComponent,
    WidgetComponent,
    SectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    HttpClientModule,
    [{provide: APP_BASE_HREF, useValue : '/' }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
