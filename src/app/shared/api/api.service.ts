import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class API {
    constructor (
        private http:Http
    ) {

    }

    GET (method:string) {
        let headers = new Headers();
        headers.append("Authorization", "Basic " + btoa('test@gmail.com' + ":" + 'test'));
        headers.append("Content-Type", "application/x-www-form-urlencoded");

        return this.http.get(`http://localhost:82/${method}`, {
                headers
            })
            .map((res:Response) => res.json());
    }
}