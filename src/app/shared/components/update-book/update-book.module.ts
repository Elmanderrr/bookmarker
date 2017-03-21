import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateBookComponent } from './update-book.component';
import { FormsModule } from "@angular/forms";


@NgModule({
	imports: [CommonModule, FormsModule],
	declarations: [UpdateBookComponent, UpdateBookComponent],
	exports: [UpdateBookComponent]
})
export class UpdateBookModule { }
