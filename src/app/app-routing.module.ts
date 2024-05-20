import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeckListComponent } from './pages/deck-list/deck-list.component';
import { DeckDetailsComponent } from './pages/deck-details/deck-details.component';
import { DeckNewComponent } from './pages/deck-new/deck-new.component';

const routes: Routes = [
  { path: '', redirectTo: '/criar', pathMatch: 'full' },
  { path: 'criar', component: DeckNewComponent },
  { path: 'list', component: DeckListComponent },
  { path: 'detalhes/:index', component: DeckDetailsComponent },
  { path: 'editar/:index', component: DeckNewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
