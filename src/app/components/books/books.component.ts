import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { BookAPI } from './../../shared/api/book/book.service'

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

    constructor(
        private http:Http,
        private BookAPI:BookAPI
    ) {
    }

    ngOnInit() {

       this.BookAPI.getBooks()
            .subscribe(resp => {
                console.log(resp)
            })


    }

}
