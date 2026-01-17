import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  code: string;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private productsSubject = new BehaviorSubject<Product[]>([
    { id: 1, name: 'Mleko', code: 'MLK-001' },
    { id: 2, name: 'Chleb', code: 'CHB-002' },
  ]);

  products$ = this.productsSubject.asObservable();

  getById(id: number): Product | undefined {
    return this.productsSubject.value.find(p => p.id === id);
  }

  add(product: Product) {
    this.productsSubject.next([product, ...this.productsSubject.value]);
  }

  remove(id: number) {
    this.productsSubject.next(this.productsSubject.value.filter(p => p.id !== id));
  }

  replaceAll(products: Product[]) {
    this.productsSubject.next(products);
  }
}
