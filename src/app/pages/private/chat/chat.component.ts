import {Component} from '@angular/core';
import {Chat} from '../../../model/chat';
import * as io from 'socket.io-client';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html'
})

export class ChatComponent {
    socket;
    messagesList: object[] = [];
    chat: Chat = new Chat();

    constructor() {
        this.socket = io();
        this.socket.on('chat message', (msg) => {
            this.messagesList.push(JSON.parse(msg));
        });
        this.chat.author = 'User Name';
    }

    send() {
        this.socket.emit('chat message', JSON.stringify(this.chat));
    }
}
