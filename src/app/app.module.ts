import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';
import { GuestFormatPipe } from './pipes/guest-format.pipe';

@NgModule({
  declarations: [AppComponent, CustomModalComponent, GuestFormatPipe],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
