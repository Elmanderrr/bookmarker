import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BooksComponent } from './books.component';
import { BookResolver } from './additional/books.resolver'

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'books',
				component: BooksComponent,
				resolve: {
					books: BookResolver
				},
				//children: [
				//  { path: ':id',  component: editBookComponent }
				//]
			}
		])
	],
	exports: [RouterModule],
	providers: [BookResolver]
})
export class BooksRoutingModule { }
