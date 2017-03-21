import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBookComponent } from './add-book.component';
import { AddBookRouting } from './add-book.routing';
import { FormsModule } from "@angular/forms";

import { UpdateBookModule } from '../../shared/components/update-book/update-book.module'


@NgModule({
	imports: [CommonModule, AddBookRouting, FormsModule, UpdateBookModule],
	declarations: [AddBookComponent],
	exports: [AddBookComponent]
})
export class AddBookModule { }
