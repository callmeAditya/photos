import { Component, OnInit, Input } from '@angular/core';
import { TumblrService } from '../tumblr.service';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  
  url=''
  constructor(private tumblr:TumblrService){
   this.fetch()
  }
  onClick(){
    this.fetch()
  }
  fetch(){
    this.tumblr.getImage().subscribe((res:any)=>{
      
      this.url=res.urls.regular
     
      
    })
  }

  ngOnInit(): void {
  }

}
