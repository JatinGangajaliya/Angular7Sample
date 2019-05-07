import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMoreModalContentComponent } from './view-more-modal-content.component';

describe('ViewMoreModalContentComponent', () => {
  let component: ViewMoreModalContentComponent;
  let fixture: ComponentFixture<ViewMoreModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMoreModalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMoreModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
