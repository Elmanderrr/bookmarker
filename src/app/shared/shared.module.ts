import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component'

@NgModule({
    imports: [RouterModule],
    declarations: [NavbarComponent],
    exports: [NavbarComponent]
})
export class SharedModule {}