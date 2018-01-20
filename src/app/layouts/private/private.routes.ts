import {Routes} from '@angular/router';
import {LoginComponent} from '../../pages/public/login/login.component';

export const PRIVATE_ROUTES: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }
];
