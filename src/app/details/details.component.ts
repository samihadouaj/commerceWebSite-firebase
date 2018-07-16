import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductService} from '../product.service';
import {ProductModel} from '../product.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
key: string;
currentProduct: any;
  constructor(private route: ActivatedRoute,
              private productservice: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.key = params['key'];
    });

      this.productservice.getElement(this.key).valueChanges().subscribe((p) => {
        this.currentProduct = p;

      });
  }

}
