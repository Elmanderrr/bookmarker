import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditBookComponent } from './edit-book.component';
import { EditBookResolver } from './additional/edit-books.resolver'

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'book/:id',
				component: EditBookComponent,
				resolve: {
					book: EditBookResolver
				}
			}
		])
	],
	exports: [RouterModule],
	providers: [EditBookResolver]
})
export class EditBookRouting { }
