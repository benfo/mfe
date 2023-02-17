import { NgModule } from '@angular/core';
import { CoolComponent } from './cool/cool.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [CoolComponent],
  imports: [BrowserModule],
  bootstrap: [CoolComponent],
  exports: [CoolComponent]
})
export class CoolModule {}
