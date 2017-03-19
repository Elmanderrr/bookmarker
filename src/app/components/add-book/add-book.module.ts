import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBookComponent } from './add-book.component';
import { AddBookRouting } from './add-book.routing';
import { FormsModule } from "@angular/forms";

@NgModule({
	imports: [CommonModule, AddBookRouting, FormsModule],
	declarations: [AddBookComponent],
	exports: [AddBookComponent]
})
export class AddBookModule { }
