import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SighupComponent } from './sighup.component';

describe('SighupComponent', () => {
  let component: SighupComponent;
  let fixture: ComponentFixture<SighupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SighupComponent]
    });
    fixture = TestBed.createComponent(SighupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
