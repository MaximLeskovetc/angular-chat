import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ChatComponent} from './chat/chat.component';
import {APP_ROUTES} from './app.routes';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
        ChatComponent
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
