import { OnInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../../shared/api/book/book'
import { BookAPI } from '../../shared/api/book/book.service'

@Component({
	selector: 'app-books',
	templateUrl: './books.component.html',
	styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {
	
	constructor(
		private BookAPI:BookAPI,
		private route:ActivatedRoute
	) {}
	
	books: Book[];
	
	ngOnInit() {
		this.route.data.subscribe(({books}) => {
			this.books = books;
			console.log(this)
		})
	}
	
}
