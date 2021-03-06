import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { BookAPI } from '../../../shared/api/book/book.service';
import { Book } from "../../../shared/models/book";

@Injectable()
export class ViewBookResolver implements Resolve<any> {
	constructor (
		private BookAPI: BookAPI
	) {}
	
	resolve (route: ActivatedRouteSnapshot): Observable<Book[]> {
		return this.BookAPI.getBookById(
			Number(route.params['id'])
		)
	}
	
}
