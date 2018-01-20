import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ChatComponent} from './pages/private/chat/chat.component';
import {APP_ROUTES} from './app.routes';
import {RouterModule} from '@angular/router';
import {HeaderMenuComponent} from './component/header-menu/header-menu.component';
import {LoginComponent} from './pages/public/login/login.component';
import { PublicComponent } from './layouts/public/public.component';
import { PrivateComponent } from './layouts/private/private.component';

@NgModule({
    declarations: [
        AppComponent,
        ChatComponent,
        HeaderMenuComponent,
        LoginComponent,
        PublicComponent,
        PrivateComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        RouterModule.forRoot(APP_ROUTES)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
