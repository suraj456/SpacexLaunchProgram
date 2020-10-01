import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchProgramComponent } from './components/launch-program/launch-program.component';

const routes: Routes = [
  { path : "" , component : LaunchProgramComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
