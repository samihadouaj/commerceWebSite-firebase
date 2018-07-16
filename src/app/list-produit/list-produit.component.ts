import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {ProductModel} from '../product.model';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {
products: any;
  constructor(private productService: ProductService,
  private router: Router) { }

  ngOnInit() {
  this.productService.getProductList().snapshotChanges().pipe(map((action) => {
    return action.map((a) => ({key: a.key, ...a.payload.val()}));
  })).subscribe((products) => {this.products = products;
   });
  }
delete(key) {
   const c = confirm('are you sure ? this item will be deleted !! ');
    if (c)  { this.productService.deleteProduct(key); }
}
update(product) {
this.productService.productToUpdate.next(product);
this.router.navigate(['add']);
}

details(key) {
    this.router.navigate(['details', key]);
}
}
