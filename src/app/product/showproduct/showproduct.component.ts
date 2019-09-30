import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.scss']
})
export class ShowproductComponent implements OnInit {

  private productSub: Subscription;
  productId: any;
  productData = {
    id: '',
    name: '',
    price: '',
    quantity: '',
    type: '',
    imageUrl: '',
    video: '',
    status,
    deal: '',
    packages: ''
  };
  url = environment.baseUrl;

  venue: any;

  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router, ) { }

  ngOnInit() {

    this.productId = this.activatedRoute.snapshot.params.productId;

    this.productService.getByid(this.productId);
    this.productSub = this.productService.getUpdatedProduct().subscribe((product: any) => {
      this.productData = product;
      this.venue = product.venue;
      console.log(product);
    });
  }

}
