import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeckListComponent } from './pages/deck-list/deck-list.component';
import { DeckDetailsComponent } from './pages/deck-details/deck-details.component';
import { DeckNewComponent } from './pages/deck-new/deck-new.component';
import { IgxCardModule, IgxGridModule, IgxListModule } from 'igniteui-angular';
import { IgxInputGroupModule } from 'igniteui-angular';
import { IgxPaginatorModule } from 'igniteui-angular';
import { IgxCarouselModule } from 'igniteui-angular';

@NgModule({
  declarations: [
    AppComponent,
    DeckListComponent,
    DeckDetailsComponent,
    DeckNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IgxGridModule,
    IgxInputGroupModule,
    IgxPaginatorModule,
    IgxCarouselModule,
    IgxCardModule,
    IgxListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
