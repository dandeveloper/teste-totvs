import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { TopicsListComponent } from './components/topics-list/topics-list.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFieldComponent,
    TopHeaderComponent,
    TopicsListComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
