import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectsPageComponent } from './architects-page.component';

describe('ArchitectsPageComponent', () => {
  let component: ArchitectsPageComponent;
  let fixture: ComponentFixture<ArchitectsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchitectsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
