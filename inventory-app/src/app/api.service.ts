import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Product } from './product.service';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly url = 'https://dummyjson.com/products?limit=10';

  constructor(private http: HttpClient) {}

  fetchProducts(): Observable<Product[]> {
    return this.http.get<any>(this.url).pipe(
      map(res =>
        (res?.products ?? []).map((p: any) => ({
          id: Number(p.id),
          name: String(p.title ?? 'Produkt'),
          code: `API-${p.id}`
        }))
      )
    );
  }
}
