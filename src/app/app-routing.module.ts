import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: 'confirm',
    component: ConfirmationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
