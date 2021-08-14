import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KandinskyComponent } from './kandinsky.component';

describe('KandinskyComponent', () => {
  let component: KandinskyComponent;
  let fixture: ComponentFixture<KandinskyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KandinskyComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KandinskyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
