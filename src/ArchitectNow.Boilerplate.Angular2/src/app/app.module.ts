﻿import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core/src/metadata/ng_module";
import { HomeComponent } from "./components/home/home.component";
import { APP_ROUTES } from "./app.routes";
import { SharedModule } from "./components/shared/shared.module";
import { SidebarService } from "./components/shared/sidebar/sidebar.service";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        RouterModule.forRoot(APP_ROUTES),
    ],
    providers: [
        SidebarService
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule {
}
