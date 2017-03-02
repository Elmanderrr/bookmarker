import { Injectable } from '@angular/core';

import { API } from './../api.service'

export class BookAPI extends API {

    getBooks() {
        return this.GET('book')
    }

}