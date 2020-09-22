import { Component } from "@angular/core";
import { template } from "@angular/core/src/render3";

@Component({
  selector: "app-root",
  template: ` 
    <Navbar></Navbar>
    <router-outlet></router-outlet>`,
})
export class AppComponent {
  title = "Proyecto2UX";
}
