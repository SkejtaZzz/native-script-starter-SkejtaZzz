import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {
  NativeScriptModule,
  NativeScriptFormsModule,
  NativeScriptHttpClientModule,
  NativeScriptRouterModule
} from '@nativescript/angular';

import { routes } from './app.routes';

// Standalone components -> do imports
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule, // ✅ daje HttpClient
    NativeScriptRouterModule.forRoot(routes),

    // standalone components
    AppComponent,
    ProductsListComponent,
    ProductDetailComponent,
    AddProductComponent,
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
