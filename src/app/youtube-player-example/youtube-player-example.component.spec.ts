import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubePlayerExampleComponent } from './youtube-player-example.component';

describe('YoutubePlayerExampleComponent', () => {
  let component: YoutubePlayerExampleComponent;
  let fixture: ComponentFixture<YoutubePlayerExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubePlayerExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubePlayerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
