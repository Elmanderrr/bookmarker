import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books.routing';
import { FormsModule } from "@angular/forms";
import { BooksListComponent } from './books-list/books-list.component';

@NgModule({
    imports: [CommonModule, BooksRoutingModule, FormsModule],
    declarations: [BooksComponent, BooksListComponent],
    exports: [BooksComponent]
})
export class BooksModule { }
