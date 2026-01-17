import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';
import { ProductService } from '../product.service';
import { Vibrate } from 'nativescript-vibrate';

const vibrator = new Vibrate();

@Component({
  selector: 'ns-add-product',
  standalone: true,
  imports: [NativeScriptCommonModule, NativeScriptFormsModule],
  schemas: [NO_ERRORS_SCHEMA], // ✅ StackLayout, TextField itd.
  templateUrl: './add-product.component.html',
})
export class AddProductComponent {
  name = '';
  code = '';

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  save() {
    if (!this.name.trim() || !this.code.trim()) {
      vibrator.vibrate(200);
      return;
    }

    this.productService.add({
      id: Date.now(),
      name: this.name.trim(),
      code: this.code.trim(),
    });

    this.router.navigate(['/products']);
  }

  cancel() {
    this.router.navigate(['/products']);
  }
}
