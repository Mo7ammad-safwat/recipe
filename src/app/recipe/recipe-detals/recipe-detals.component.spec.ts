import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetalsComponent } from './recipe-detals.component';

describe('RecipeDetalsComponent', () => {
  let component: RecipeDetalsComponent;
  let fixture: ComponentFixture<RecipeDetalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeDetalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipeDetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
