import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directive/highlight.directive';
import { DirectiveComponent } from './components/options/directive/directive.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {NavbarComponent} from "./components/navbar/navbar.component";
import { Highlight2Directive } from './directive/highlight2.directive';
import { Highlight3Directive } from './directive/highlight3.directive';
import { Highlight4Directive } from './directive/highlight4.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    DirectiveComponent,
    HomeComponent,
    Highlight2Directive,
    Highlight3Directive,
    Highlight4Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
