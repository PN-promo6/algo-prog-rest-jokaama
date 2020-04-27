import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public getAlbums(): void {
    this.httpClient.get('http://localhost:3001/albums')
      .subscribe(
        res => {
          console.log(res);

        },
        error => {
          console.log(error);

        })
  }

  public getMembers(): void {
    this.httpClient.get('http://localhost:3001/members')
      .subscribe(
        res => {
          console.log(res);

        },
        error => {
          console.log(error);

        })
  }

  public getConcertTours(): void {
    this.httpClient.get('http://localhost:3001/concertTours')
      .subscribe(
        res => {
          console.log(res);

        },
        error => {
          console.log(error);

        })
  }
  public getLabels(): void {
    this.httpClient.get('http://localhost:3001/labels')
      .subscribe(
        res => {
          console.log(res);

        },
        error => {
          console.log(error);

        })
  }
}
