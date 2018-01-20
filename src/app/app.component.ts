import {Component} from '@angular/core';
import * as io from 'socket.io-client';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    socket;
    messages: object[] = [];

    constructor() {
        this.socket = io();
        this.socket.on('chat message', (msg) => {
            this.messages.push(msg);
        });
    }

    send() {
        this.socket.emit('chat message', 'Hello world');
    }
}
