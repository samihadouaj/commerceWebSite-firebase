import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductModel} from '../product.model';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-formproduit',
  templateUrl: './formproduit.component.html',
  styleUrls: ['./formproduit.component.css']
})
export class FormproduitComponent implements OnInit {
newProduct: ProductModel;
productForm: FormGroup;

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.productForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'brand': new FormControl(null, Validators.required),
      'price': new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')]),
      'imgurl': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
    });
    this.productService.productToUpdate.subscribe((product: ProductModel) => {
    this.productService.editMode = true;
    this.productService.varibale = product;
 });

    if (this.productService.editMode) {
      this.productForm.setValue({
        'name': this.productService.varibale.name,
        'brand': this.productService.varibale.brand,
        'price': this.productService.varibale.price,
        'imgurl': this.productService.varibale.imgurl,
        'description': this.productService.varibale.description,
      });
    }
  }

  onSubmit() {
    console.log(this.productService.editMode);
    const name = this.productForm.get('name').value;
    const brand = this.productForm.get('brand').value;
    const price = this.productForm.get('price').value;
    const imgurl = this.productForm.get('imgurl').value;
    const description = this.productForm.get('description').value;
    this.newProduct = new ProductModel(name, brand, price, imgurl, description );

    if (! this.productService.editMode) {
      this.productService.addProduct(this.newProduct);

    } else {
      this.productService.updateProduct(this.productService.varibale.key, this.newProduct);
      this.productService.editMode = false;
    }
    this.productForm.reset();
  }
}
