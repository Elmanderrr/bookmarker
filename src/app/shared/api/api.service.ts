import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class API {
	
	constructor(private http: Http) {
	}
	
	
	url: string = 'http://localhost:82';
	auth: string = `Basic ${btoa('test@gmail.com:test')}`;
	
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
	
	POST(method: string, props: Object = {}, headers:Headers = this.getHeaders()) {
		
		return this.http.post(`${this.url}/${method}`, props, {
			withCredentials : false,
			headers: headers
		})
			.map((res: Response) => res.json());
	}
	
	
}
