import { OnInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../../shared/models/book'

@Component({
	selector: 'app-books',
	templateUrl: './books.component.html',
	styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {
	
	constructor(
		private route:ActivatedRoute
	) {}
	
	books: Book[];
	
	ngOnInit() {
		this.route.data.subscribe(({books}) => {
			this.books = books;
		})
	}
	
}
