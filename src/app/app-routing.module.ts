import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetroBoardComponent } from './retro-board/retro-board.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'retro-board', component: RetroBoardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path : '', component : DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
