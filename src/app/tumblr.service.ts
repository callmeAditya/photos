import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
interface URLS{
  urls:{
    regular:string
  }
}



@Injectable({
  providedIn: 'root'
})


export class TumblrService {

  constructor(private http:HttpClient) { }
// baseUR
  getImage(){
    return this.http.get<URLS>('https://api.unsplash.com/photos/random', {
      headers:{
        Authorization:
        'Client-ID nXO6i3_SI7AOCquuO9u6F5_6EVb_R2jE0LOHFCHI6cc'
      }
    })    
  }
}
