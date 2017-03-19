import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'add-book',
				component: AddBookComponent,
				resolve: {
				}
			}
		])
	],
	exports: [RouterModule],
	providers: []
})
export class AddBookRouting { }
