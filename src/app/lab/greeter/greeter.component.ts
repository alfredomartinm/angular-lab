import { Component, OnInit } from '@angular/core';
import { GreetingService } from '../services/greeting.service';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.sass']
})
export class GreeterComponent implements OnInit {

  constructor(private greetingService: GreetingService) { }

  ngOnInit(): void {
  }

  greet():string{
    return this.greetingService.greet();
  }
}
