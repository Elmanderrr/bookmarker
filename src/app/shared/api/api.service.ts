import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { environment as env } from '../../../environments/environment'

import 'rxjs/add/operator/map';
import { Book } from "../models/book";

@Injectable()
export class API {
	
	constructor(private http: Http) {
	}
	
	
	url: string = env.API;
	auth: string = `Basic ${btoa(env['test-creds'])}`;
	
	/**
	 *
	 * @returns {Headers}
	 */
	getHeaders() {
		let headers = new Headers();
		headers.append("Authorization", this.auth);
		headers.append("Content-Type", "application/x-www-form-urlencoded");
		return headers
	}
	
	/**
	 *
	 * @returns {Headers}
	 */
	getPUTHeaders () {
		let headers = new Headers();
		headers.append("Authorization", this.auth);
		headers.append('Content-Type', 'application/json');
		return headers
	}
	
	/**
	 *
	 * @param method
	 * @returns {Observable<R>}
	 * @constructor
	 */
	GET(method: string) {
		
		return this.http.get(`${this.url}/${method}`, {
			headers: this.getHeaders()
		})
			.map((res: Response) => res.json());
		
	}
	
	/**
	 *
	 * @param method
	 * @param props
	 * @param headers
	 * @returns {Observable<R>}
	 * @constructor
	 */
	POST(method: string, props: Object = {}, headers:Headers = this.getHeaders()) {
		
		return this.http.post(`${this.url}/${method}`, props, {
			withCredentials : false,
			headers: headers
		})
			.map((res: Response) => res.json());
	}
	
	/**
	 *
	 * @param method
	 * @param props
	 * @returns {Observable<R>}
	 * @constructor
	 */
	PUT(method: string, props: Book) {
		return this.http.put(`${this.url}/${method}`, props, {
			headers: this.getPUTHeaders()
		})
	}
	

	
}
