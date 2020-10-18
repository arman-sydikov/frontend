import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterViewInit, OnDestroy {

  items = [{
    playlistId: "PLQqbdnAgoRmYhfPJgYB9YQxDsNQ-ErQBd",
    videoId: "sGxNFVNnnbk",
    startSeconds: 425,
    endSeconds: 457,
    time: "00:07:24",
    text: "一言难尽哪",
    tvshow: "都挺好",
    episode: "8"
  },{
    playlistId: "PLQqbdnAgoRmYhfPJgYB9YQxDsNQ-ErQBd",
    videoId: "QqNWf5OYZ3Y",
    startSeconds: 2307,
    endSeconds: 2336,
    time: "00:38:48",
    text: "逻辑缜密 毫无破绽",
    tvshow: "都挺好",
    episode: "10"
  },{
    playlistId: "PLQqbdnAgoRmYhfPJgYB9YQxDsNQ-ErQBd",
    videoId: "kEjV0Pd9L38",
    startSeconds: 1146,
    endSeconds: 1168,
    time: "00:19:09",
    text: "这无功不受禄",
    tvshow: "都挺好",
    episode: "16"
  },{
    playlistId: "PLQqbdnAgoRmYhfPJgYB9YQxDsNQ-ErQBd",
    videoId: "MUmVZA47rJA",
    startSeconds: 1082,
    endSeconds: 1100,
    time: "00:18:10",
    text: "check out",
    tvshow: "",
    episode: "Mr. Church"
  }];

  @ViewChild('demoYouTubePlayer') demoYouTubePlayer: ElementRef<HTMLDivElement>;
  videoWidth: number | undefined;
  videoHeight: number | undefined;

  constructor(private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    // This code loads the IFrame Player API code asynchronously, according to the instructions at
    // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  onResize = (): void => {
    // Automatically expand the video to fit the page up to 1200px x 720px
    // console.log(this.demoYouTubePlayer);
    this.videoWidth = Math.min(this.demoYouTubePlayer.nativeElement.clientWidth-60, 640);
    this.videoHeight = (this.videoWidth * 390) / 640;
    console.log(this.videoWidth + 'x' + this.videoHeight);
    this._changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }

}
