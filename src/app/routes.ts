import { Routes } from "@angular/router";
import { loginComponent } from "./Components/login.component";
import { mainComponent } from "./Components/main.component";

export const AppRoutes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "login", component: loginComponent },
  {
    path: "registro",
    component: loginComponent,
    canDeactivate: ["canDeactivate"],
  },
  {
    path: "main",
    component: mainComponent,
    resolve: {
      url: "externalUrlRedirectResolver",
    },
    data: {
      externalUrl: "https://hondurasconecta.org/",
    },
  },
];
