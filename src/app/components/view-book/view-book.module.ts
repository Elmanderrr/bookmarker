import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewBookComponent } from './view-book.component';
import { ViewBookRouting } from './view-book.routing';
import { FormsModule } from "@angular/forms";

import { UpdateBookModule } from '../../shared/components/update-book/update-book.module'

@NgModule({
	imports: [CommonModule, ViewBookRouting, FormsModule, UpdateBookModule],
	declarations: [ViewBookComponent],
	exports: [ViewBookComponent]
})
export class EditBookModule { }
