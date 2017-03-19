import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Book } from "../../shared/api/book/book";

@Component({
	selector: 'app-edit-book',
	templateUrl: './edit-book.component.html',
	styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
	
	constructor (
		private route:ActivatedRoute
	) {}
	
	book: Book;
	
	ngOnInit () {
		this.route.data.subscribe(({book}) => {
			this.book = book;
		})
	}
	
}
