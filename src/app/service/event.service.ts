import { Injectable } from '@angular/core';
import { Event } from '../model/event';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  // name: string = '';
  // date: string = '';
  // time: string = '';
  // location: Location = new Location();

  event1: Event = new Event(
    'Marriage',
    'Sept 28',
    '11am',
    new Location('Varoshaza ter', 'Budapest', 'Hungary')
  );

  event2: Event = new Event(
    'Nameday',
    'June 2',
    '8pm',
    new Location('Honved 2', 'Kecskemet', 'Hungary'),
  );

  event3: Event = new Event(
    'New Year Eve',
    'Dec 31',
    '12pm',
    new Location('Time Square', 'New York', 'USA')
  )

  constructor() { }

  getAll(): any[]{
    return [this.event1, this.event2, this.event3];
  }

}
