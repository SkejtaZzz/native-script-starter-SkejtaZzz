import { Component, NO_ERRORS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { Product, ProductService } from '../product.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'ns-products-list',
  standalone: true,
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA], // ✅ pozwala na StackLayout, ActionBar itd.
  templateUrl: './products-list.component.html',
})
export class ProductsListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  private sub?: Subscription;

  constructor(
    private productService: ProductService,
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sub = this.productService.products$.subscribe(list => {
      this.products = list;
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  goAdd() {
    this.router.navigate(['/add']);
  }

  openDetails(p: Product) {
    this.router.navigate(['/products', p.id]);
  }

  loadFromApi() {
    this.api.fetchProducts().subscribe({
      next: list => this.productService.replaceAll(list),
      error: () => {},
    });
  }
}
