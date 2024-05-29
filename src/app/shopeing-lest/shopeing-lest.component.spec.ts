import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopeingLestComponent } from './shopeing-lest.component';

describe('ShopeingLestComponent', () => {
  let component: ShopeingLestComponent;
  let fixture: ComponentFixture<ShopeingLestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopeingLestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopeingLestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
