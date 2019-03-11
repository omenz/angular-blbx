import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormInitializerComponent } from './form-initializer/form-initializer.component';

const routes: Routes = [
  {path: 'form/:dataurl', component: FormComponent},
  {path: '', component: FormInitializerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

