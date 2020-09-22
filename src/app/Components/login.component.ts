import { Component, OnInit } from "@angular/core";

@Component({
  selector: "loginComponent",
  templateUrl: "./login.component.html",
  styles: [
    `
      .form-rounded {
        border-radius: 1rem;
      }
      ,
      .center {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
      ,
      .col-centered {
        float: none;
        margin: 0 auto;
      }
      .demo-content {
        padding: 25px;
        font-size: 18px;
        background: #abb1b8;
      }
    `,
  ],
})
export class loginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
