import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiltercategoryPage } from './filtercategory.page';

describe('FiltercategoryPage', () => {
  let component: FiltercategoryPage;
  let fixture: ComponentFixture<FiltercategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltercategoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiltercategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
