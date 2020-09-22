import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "Navbar",
  templateUrl: "navbar.component.html",
  styles: [
    `
      .marginauto {
        margin: 10px auto 20px;
        display: block;
      }
      ,
      .centered {
        position: fixed;
        top: 50%;
        left: 50%;
        margin-top: -50px;
        margin-left: -100px;
      }
      ,
      .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
      }
    `,
  ],
})
export class Navbar implements OnInit {
  constructor(private router: Router) {}

  login() {
    this.router.navigate(["/login"]);
  }
  ngOnInit() {}
}
