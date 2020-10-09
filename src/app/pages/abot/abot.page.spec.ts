import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbotPage } from './abot.page';

describe('AbotPage', () => {
  let component: AbotPage;
  let fixture: ComponentFixture<AbotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbotPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
