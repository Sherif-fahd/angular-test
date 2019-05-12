import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPumpComponent } from '../components/list-pump/list-pump.component';
import { SavePumpsComponent } from '../components/save-pumps/save-pumps.component';
const routes: Routes = [
    {path: 'pupms-list', component: ListPumpComponent},
    {path: 'save-pumps', component: SavePumpsComponent}
];

@NgModule({
 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
