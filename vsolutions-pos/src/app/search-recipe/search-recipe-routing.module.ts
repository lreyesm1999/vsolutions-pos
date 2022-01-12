import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchRecipePage } from './search-recipe.page';

const routes: Routes = [
  {
    path: '',
    component: SearchRecipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRecipePageRoutingModule {}
