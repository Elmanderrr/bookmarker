import { Component, OnInit } from '@angular/core';
import { BookAPI } from "../../shared/api/book/book.service";
import { Book } from "../../shared/api/book/book";

@Component({
	selector: 'app-add-book',
	templateUrl: './add-book.component.html',
	styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
	
	constructor (
		private BookAPI:BookAPI
	) {
	}
	
	
	newBook: Book;
	
	uploadedBook: Book;
	
	
	ngOnInit () {
	}
	
	
	/**
	 *
	 * @param e
	 */
	loadNewBook (e) {
		e.preventDefault();
		
		this.BookAPI.loadBook({book: this.newBook}).subscribe(resp => {
			const id = resp.contentUri.match(/\d+/)[0];
			
			this.getBook(id)
		})
	}
	
	/**
	 *
	 * @param e
	 */
	fileChange (e) {
		this.newBook = e.target.files[0]
	}
	
	/**
	 *
	 * @param id
	 */
	getBook (id:number) {
		this.BookAPI.getBookById(id).subscribe((book: Book)=> {
			this.uploadedBook = book;
		})
	}
	
	editBook () {
		const {id, title, description} = this.uploadedBook;
		
		this.BookAPI.updateBook(id, {
			title,
			description
		}).subscribe(resp => {
			console.log(resp)
		})
	}
}
