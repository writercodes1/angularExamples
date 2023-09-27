import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerentchilddataComponent } from './perentchilddata.component';

describe('PerentchilddataComponent', () => {
  let component: PerentchilddataComponent;
  let fixture: ComponentFixture<PerentchilddataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerentchilddataComponent]
    });
    fixture = TestBed.createComponent(PerentchilddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
