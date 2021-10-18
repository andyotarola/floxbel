import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module'
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    FormsModule
  ]
})
export class SharedModule { }
