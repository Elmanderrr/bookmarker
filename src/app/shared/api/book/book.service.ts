import { API } from '../api.service'
import { Headers } from "@angular/http";
import { Observable } from "rxjs";
import { Book } from "./book";


export class BookAPI extends API {
	
	/**
	 *
	 * @returns {*}
	 */
	getBooks(): Observable<Book[]> {
		return this.GET('book')
	}
	
	/**
	 *
	 * @param id
	 * @param props
	 * @returns {Observable<Response>}
	 */
	updateBook(id:number, props: Book) {
		return this.PUT(`book/${id}`, props)
	}
	
	/**
	 *
	 * @param id
	 */
	getBookById(id:number) {
		return this.GET(`book/${id}`)
	}
	
	/**
	 *
	 * @param props
	 * @returns {Observable<R>}
	 */
	loadBook(props) {
		const formData = new FormData();
		
		let headers = new Headers();
		headers.append("Authorization",  this.auth);
		
		formData.append('book', props.book);

		return this.POST('book', formData, headers)
	}
	
}
