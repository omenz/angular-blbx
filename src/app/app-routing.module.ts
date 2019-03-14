import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { WidgetsInitializerComponent } from './components/widgets-initializer/widgets-initializer.component';

const routes: Routes = [
  {path: 'form/:dataurl', component: WidgetsComponent},
  {path: '', component: WidgetsInitializerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

