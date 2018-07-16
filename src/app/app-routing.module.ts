import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {ListProduitComponent} from './list-produit/list-produit.component';
import {FormproduitComponent} from './formproduit/formproduit.component';
import {RouterModule, Routes} from '@angular/router';
import {DetailsComponent} from './details/details.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'allproducts', component: ListProduitComponent},
  {path: 'add', component: FormproduitComponent},
  {path: 'details/:key', component: DetailsComponent},
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
