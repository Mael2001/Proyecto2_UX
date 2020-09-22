import { Component } from "@angular/core";
import { template } from "@angular/core/src/render3";

@Component({
  selector: "app-root",
  template: `
    <div class="container-fluid">
      <Navbar></Navbar>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  title = "Proyecto2UX";
}
