import {Component} from '@angular/core';
import * as io from 'socket.io-client';

class Message {
    content: string;
    author: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    socket;
    messagesList: object[] = [];
    message: Message = new Message();

    constructor() {
        this.socket = io();
        this.socket.on('chat message', (msg) => {
            this.messagesList.push(msg);
        });
        this.message.author = 'User Name';
    }

    send() {
        this.socket.emit('chat message', JSON.stringify(this.message));
    }
}
