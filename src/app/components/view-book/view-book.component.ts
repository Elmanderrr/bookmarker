import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Book } from "../../shared/models/book";

@Component({
	selector: 'app-view-book',
	templateUrl: 'view-book.component.html',
	styleUrls: ['view-book.component.css']
})
export class ViewBookComponent implements OnInit {
	
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
