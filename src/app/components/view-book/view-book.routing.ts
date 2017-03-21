import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewBookComponent } from './view-book.component';
import { ViewBookResolver } from './additional/view-books.resolver'

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'book/:id',
				component: ViewBookComponent,
				resolve: {
					book: ViewBookResolver
				}
			}
		])
	],
	exports: [RouterModule],
	providers: [ViewBookResolver]
})
export class ViewBookRouting { }
