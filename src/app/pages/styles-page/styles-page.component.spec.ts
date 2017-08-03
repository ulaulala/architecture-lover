import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylesPageComponent } from './styles-page.component';

describe('StylesPageComponent', () => {
  let component: StylesPageComponent;
  let fixture: ComponentFixture<StylesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
