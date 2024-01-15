import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcoContentComponent } from './ico-content.component';

describe('IcoContentComponent', () => {
  let component: IcoContentComponent;
  let fixture: ComponentFixture<IcoContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcoContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IcoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
