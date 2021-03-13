import { Component } from '@angular/core';
import { RealtimeService } from '../realtime.service';
@Component({
  selector: 'app-users-counter',
  templateUrl: './users-counter.component.html',
  styleUrls: ['./users-counter.component.css']
})
export class UsersCounterComponent {
  counter: Number | undefined;

  constructor(private service : RealtimeService){
    service.currentCounter.subscribe(counter => this.counter = counter);
  }
}
