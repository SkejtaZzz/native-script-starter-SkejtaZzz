import { Component } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';

@Component({
  selector: 'ns-app',
  standalone: true,
  imports: [NativeScriptRouterModule],
  templateUrl: './app.component.html',
})
export class AppComponent {}
