import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule // Add NgbModule here

  ],
  exports: [
    NgbModule // Re-export NgbModule here
  ]
})
export class CoreModule { }
