import { NgModule, ModuleWithProviders } from '@angular/core'
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component'
import { API } from './api/api.service'
import { BookAPI } from './api/book/book.service';

@NgModule({
    imports: [RouterModule],
    declarations: [NavbarComponent],
    exports: [NavbarComponent]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [API, BookAPI]
        };
    }
}
