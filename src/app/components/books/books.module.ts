import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books.routing';

@NgModule({
    imports: [CommonModule, BooksRoutingModule],
    declarations: [BooksComponent],
    exports: [BooksComponent]
})
export class BooksModule { }