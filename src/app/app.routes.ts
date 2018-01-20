import {Routes} from '@angular/router';
import {PrivateComponent} from './layouts/private/private.component';
import {PublicComponent} from './layouts/public/public.component';
import {PUBLIC_ROUTES} from './layouts/public/public.routes';
import {PRIVATE_ROUTES} from './layouts/private/private.routes';

export const APP_ROUTES: Routes = [
    {path: '', component: PublicComponent, children: PUBLIC_ROUTES},
    {path: '', component: PrivateComponent, children: PRIVATE_ROUTES},
];
