import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BloglistPage } from './bloglist.page';

describe('BloglistPage', () => {
  let component: BloglistPage;
  let fixture: ComponentFixture<BloglistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloglistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BloglistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
