import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroContentComponent } from './macro-content.component';

describe('MacroContentComponent', () => {
  let component: MacroContentComponent;
  let fixture: ComponentFixture<MacroContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacroContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MacroContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
