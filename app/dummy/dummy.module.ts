import { NgModule } from '@angular/core';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';

import {DummyRoutingModule} from "./dummy-routing.module";
import {DummyComponent} from "./dummy.component";

@NgModule({
    imports: [
        CommonModule,
        DummyRoutingModule
    ],
    declarations: [
    DummyComponent
    ],
    exports: [
    DummyComponent
    ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},

    ],

})
export class DummyModule { }
