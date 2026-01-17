import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { ProductsListComponent } from "./products-list/products-list.component";

const routes: Routes = [
    { path: "", redirectTo: "/products", pathMatch: "full" },
    { path: "products", component: ProductsListComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
