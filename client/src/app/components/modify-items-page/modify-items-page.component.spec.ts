import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyItemsPageComponent } from './modify-items-page.component';

describe('ModifyItemsPageComponent', () => {
  let component: ModifyItemsPageComponent;
  let fixture: ComponentFixture<ModifyItemsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyItemsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyItemsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
