import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaidsComponent } from './maids/maids.component';
import { DetailedMaidComponent } from './detailed-maid/detailed-maid.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'maids',pathMatch:'full'},
  {path:'maids',component:MaidsComponent},
  {path:'DetailedMaid/:id',component:DetailedMaidComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
