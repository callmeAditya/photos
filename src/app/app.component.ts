import { Component } from '@angular/core';
import { TumblrService } from './tumblr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'photos';

  getEvent(){
    // this.tumblr.getImage().subscribe((res:any)=>{
    //   console.log('url',res.header);
      
    // })
  }

}
