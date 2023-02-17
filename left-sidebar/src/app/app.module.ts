import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoolModule } from './cool/cool.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoolModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
