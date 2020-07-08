import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  constructor() { }

  greet(): string {
    return "hello from greeting service";
  }
}
