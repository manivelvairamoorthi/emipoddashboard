import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSearchComponent } from './components/customer-search/customer-search.component';


const routes: Routes = [
  {path:'customerSearch',component:CustomerSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
