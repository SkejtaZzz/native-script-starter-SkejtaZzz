import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { Product, ProductService } from '../product.service';
import { Vibrate } from 'nativescript-vibrate';

const vibrator = new Vibrate();

@Component({
  selector: 'ns-product-detail',
  standalone: true,
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA], // ✅ StackLayout itd.
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getById(id);
  }

  back() {
    this.router.navigate(['/products']);
  }

  remove() {
    if (!this.product) return;
    this.productService.remove(this.product.id);
    vibrator.vibrate(100);
    this.router.navigate(['/products']);
  }
}
