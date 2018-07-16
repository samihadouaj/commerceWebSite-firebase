import {AngularFireDatabase} from 'angularfire2/database';
import {ProductModel} from './product.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {FormGroup} from '@angular/forms';
@Injectable()

export class ProductService {
  productToUpdate = new Subject<ProductModel>();
  varibale: any;
  editMode = false;
  addSucceded = false;
  constructor(private db: AngularFireDatabase) {
  }

  getProductList() {
    return this.db.list('products');
  }
  addProduct(newProduct: ProductModel) {
    this.getProductList().push({
      name: newProduct.name,
      brand: newProduct.brand,
      price: newProduct.price,
      imgurl: newProduct.imgurl,
      description: newProduct.description
    }).then(() => {this.addSucceded = true; console.log(this.addSucceded); });
  }
  deleteProduct(key) {
    this.getProductList().remove(key);
  }
  updateProduct(key, updatedProduct: ProductModel) {
    this.getProductList().update(key, updatedProduct);
  }
  getElement(key) {
    return this.db.object('products/' + key);
  }
}
