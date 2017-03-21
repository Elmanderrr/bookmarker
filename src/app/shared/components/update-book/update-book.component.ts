import { Component, OnInit, Input } from '@angular/core';
import { Book } from "../../models/book";
import { BookAPI } from "../../api/book/book.service";

import * as _ from 'underscore'

@Component({
	selector: 'app-update-book',
	templateUrl: './update-book.component.html',
	styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

	@Input() book: Book;
	
	years: number[] = _.range(1900, 2018).reverse();
	
	constructor (
		private BookAPI: BookAPI
	) {
	}
	
	ngOnInit () {
	}
	
	editBook () {
		const {id, title, description, lang, year} = this.book;
		
		this.BookAPI.updateBook(id, {
			title,
			description,
			lang,
			year
		}).subscribe(resp => {
			console.log(resp)
		})
	}
}
