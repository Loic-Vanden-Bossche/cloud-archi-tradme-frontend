import { Component, OnInit } from '@angular/core';
import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'archi-tradme';

  constructor(
    private readonly appService: AppService
  ) {}

  apiIsAlive: boolean = false;
  responseId: string = '';
  error = '';

  ngOnInit() {
    this.appService.getIsApiAlive().subscribe({
      next: (response) => {
        this.apiIsAlive = response.isAlive;
        this.responseId = response.responseId;
        this.error = '';
      },
      error: (error) => {
        this.error = error.message;
        this.apiIsAlive = false;
        this.responseId = '';
      }
    });
  }
}
