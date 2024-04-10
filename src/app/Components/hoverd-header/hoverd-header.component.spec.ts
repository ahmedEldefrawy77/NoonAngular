import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverdHeaderComponent } from './hoverd-header.component';

describe('HoverdHeaderComponent', () => {
  let component: HoverdHeaderComponent;
  let fixture: ComponentFixture<HoverdHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HoverdHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HoverdHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
