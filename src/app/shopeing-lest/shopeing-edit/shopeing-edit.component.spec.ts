import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopeingEditComponent } from './shopeing-edit.component';

describe('ShopeingEditComponent', () => {
  let component: ShopeingEditComponent;
  let fixture: ComponentFixture<ShopeingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopeingEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopeingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
