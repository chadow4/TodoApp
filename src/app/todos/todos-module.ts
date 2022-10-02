import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {TodosRoutingModule} from "./todos-routing.module";
import {TodosMaterialModule} from "./todos-material-module"
import * as fromComponents from "./components"
import * as fromContainer from "./containers"
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    TodosRoutingModule,
    TodosMaterialModule,
    FormsModule
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainer.containers
  ],
  providers: [],

})
export class TodosModule { }
