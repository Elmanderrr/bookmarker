import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { API } from './../../shared/api/api.service'

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

    constructor(
        private http:Http,
        private API:API
    ) {
    }

    ngOnInit() {
        this.API.get('book')
            .subscribe(resp => {
                console.log(resp)
            })


    }

}
