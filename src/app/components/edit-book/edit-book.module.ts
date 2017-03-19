import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditBookComponent } from './edit-book.component';
import { EditBookRouting } from './edit-book.routing';
import { FormsModule } from "@angular/forms";

@NgModule({
	imports: [CommonModule, EditBookRouting, FormsModule],
	declarations: [EditBookComponent],
	exports: [EditBookComponent]
})
export class EditBookModule { }
