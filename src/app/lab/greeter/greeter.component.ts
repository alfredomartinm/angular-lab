import { Component, OnInit } from '@angular/core';
import { GreetingService } from '../services/greeting.service';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.sass']
})
export class GreeterComponent implements OnInit {

  greeting: string;

  constructor(private greetingService: GreetingService) { }

  ngOnInit(): void {
    this.greeting = this.greetingService.greet();
  }

}
