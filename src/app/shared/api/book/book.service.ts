import { API } from './../api.service'
import { Headers } from "@angular/http";

export class BookAPI extends API {
	
	/**
	 *
	 * @returns {*}
	 */
	getBooks() {
		return this.GET('book')
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
