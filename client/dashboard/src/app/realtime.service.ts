//users-angular

import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io'; //websocket
@Injectable({
  providedIn: 'root'
})
export class RealtimeService {

  currentCounter= this.socket.fromEvent<Number>('count');//access to server
  constructor(private socket:Socket) { }
}
