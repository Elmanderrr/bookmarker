import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books.routing';
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [CommonModule, BooksRoutingModule, FormsModule],
    declarations: [BooksComponent],
    exports: [BooksComponent]
})
export class BooksModule { }
