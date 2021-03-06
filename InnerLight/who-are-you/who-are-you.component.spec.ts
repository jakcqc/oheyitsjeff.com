import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhoAreYouComponent } from './who-are-you.component';

describe('WhoAreYouComponent', () => {
  let component: WhoAreYouComponent;
  let fixture: ComponentFixture<WhoAreYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoAreYouComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhoAreYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
