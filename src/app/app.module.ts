import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing'
import { SharedModule } from './shared/shared.module'
import { AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { BooksModule } from './components/books/books.module'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        SharedModule,
        AlertModule.forRoot(),

        BooksModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
