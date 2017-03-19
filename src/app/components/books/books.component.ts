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
	newBook:any;
	
	ngOnInit() {
		this.route.data.subscribe(({books}) => {
			this.books = books;
			console.log(this)
		})
	}
	
	
	reloadBooks() {
		this.BookAPI.getBooks()
			.subscribe((books) => {
				this.books = books;
			})
	}
	
	loadNewBook (e) {
		e.preventDefault();
		
		this.BookAPI.loadBook({book: this.newBook}).subscribe(resp => {
			this.reloadBooks()
		})
	}
	
	click (book) {
		this.BookAPI.getBookById(book.id).subscribe(resp => {
			console.log(resp)
		})
	}
	
}
