import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { BookAPI } from '../../../shared/api/book/book.service';
import { Book } from "../../../shared/api/book/book";

@Injectable()
export class BookResolver implements Resolve<any> {
	constructor (private BookAPI: BookAPI) {
	}
	
	resolve (route: ActivatedRouteSnapshot): Observable<Book[]> {
		return this.BookAPI.getBooks()
	}
	
}
