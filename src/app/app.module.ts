import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component';
import { RefactorButtonChatGptComponent } from './components/refactor-button-chat-gpt/refactor-button-chat-gpt.component';
import { DropdownChatGptComponent } from './components/drop-down-chat-gpt/drop-down-chat-gpt.component';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ButtonChatGptComponent } from './components/button-chat-gpt/button-chat-gpt.component';

@NgModule({
  declarations: [
    AppComponent,
    RefactorButtonChatGptComponent,
    DropdownChatGptComponent,
    FilterPipe,
    ButtonChatGptComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
