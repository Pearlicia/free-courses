import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlogitemPage } from './blogitem.page';

describe('BlogitemPage', () => {
  let component: BlogitemPage;
  let fixture: ComponentFixture<BlogitemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogitemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlogitemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
