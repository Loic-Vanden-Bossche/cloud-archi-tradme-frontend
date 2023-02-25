import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

interface IsApiAlive {
  isAlive: boolean;
  responseId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private readonly http: HttpClient) {}

  getIsApiAlive(): Observable<IsApiAlive> {
    return this.http.get<IsApiAlive>('https://api.archi-tradme.link/');
  }
}
