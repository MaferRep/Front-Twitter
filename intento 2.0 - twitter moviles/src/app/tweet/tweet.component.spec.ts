import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TweetComponent } from './tweet.component';

describe('TweetComponent', () => {
  let component: TweetComponent;
  let fixture: ComponentFixture<TweetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TweetComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user information correctly', () => {
    component.userName = 'Nombre del Usuario';
    component.userHandle = '@usuario';
    fixture.detectChanges();

    const element = fixture.nativeElement;
    const subtitle = element.querySelector('ion-card-subtitle');
    const title = element.querySelector('ion-card-title');

    expect(subtitle.textContent).toBe('Nombre del Usuario');
    expect(title.textContent).toBe('@usuario');
  });

  it('should display tweet content correctly', () => {
    component.tweetContent = 'Este es el contenido del tweet.';
    fixture.detectChanges();

    const element = fixture.nativeElement;
    const content = element.querySelector('ion-card-content');

    expect(content.textContent).toBe('Este es el contenido del tweet.');
  });

  it('should display tweet time correctly', () => {
    component.tweetTime = 'Hace 1 hora';
    fixture.detectChanges();

    const element = fixture.nativeElement;
    const note = element.querySelector('ion-note');

    expect(note.textContent).toBe('Hace 1 hora');
  });
});








