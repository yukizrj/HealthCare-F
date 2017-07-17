import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DummyComponent} from "./dummy.component";

const Dummyroutes: Routes = [
    {path:'',component:DummyComponent,

    },
];

@NgModule({
    imports: [RouterModule.forChild(Dummyroutes)],
    exports: [RouterModule]
})
export class DummyRoutingModule { }
