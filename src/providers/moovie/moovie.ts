import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {

  private base_url = "https://api.themoviedb.org/3"

  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }

  getLastestMovies() {
    return this.http.get(this.base_url + "/movie/popular?api_key=d0796e4e8e06a47acc7ce9bb0f9676d6");
  }

//  /movie/550?api_key=d0796e4e8e06a47acc7ce9bb0f9676d6
}
