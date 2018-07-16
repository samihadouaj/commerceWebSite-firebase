import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormproduitComponent } from './formproduit/formproduit.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {ProductService} from './product.service';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FormproduitComponent,
    ListProduitComponent,
    DetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
