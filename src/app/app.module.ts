import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot } from "@angular/router";
import { AppRoutes } from "./routes";
import { Navbar } from "./Common/navbar.component";
import { loginComponent } from "./Components/login.component";
import { mainComponent } from "./Components/main.component";

@NgModule({
  declarations: [AppComponent, Navbar, loginComponent, mainComponent],
  imports: [BrowserModule, RouterModule.forRoot(AppRoutes)],
  providers: [
    {
      provide: "externalUrlRedirectResolver",
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        window.location.href = (route.data as any).externalUrl;
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
