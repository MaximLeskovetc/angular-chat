import {Routes} from '@angular/router';
import {ChatComponent} from '../../pages/private/chat/chat.component';

export const PUBLIC_ROUTES: Routes = [
    {
        path: '',
        component: ChatComponent
    }
];
