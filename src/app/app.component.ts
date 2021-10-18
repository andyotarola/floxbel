import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'foxbel';
  mode:MatDrawerMode = 'over'
  opened: boolean = false;


  audioList = [
    {
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      title: "Smaple 1",
      cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
    },
    {
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
      title: "Sample 2",
      cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
    },
    {
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
      title: "Sample 3",
      cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
    }
  ];

  constructor(
    private renderer:Renderer2
  ){}

  ngOnInit(): void {
    this.resize()
  }

  @HostListener("window:resize",["$event"])
  onResize(){
    this.resize()
  }

  resize(){
    if(innerWidth >= 960){
      this.mode = 'side'
      this.opened = true
    }else{
      this.mode = 'over'
      this.opened = false
    }
  }

}
