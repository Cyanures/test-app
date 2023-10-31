import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import {MatMenuModule} from '@angular/material/menu'

const material = [
  MatButtonModule,
  MatMenuModule
];

@NgModule({
  exports: [material],
  imports: [material]
})
export class MaterialModule { }
