import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraydashComponent } from './arraydash.component';

describe('ArraydashComponent', () => {
  let component: ArraydashComponent;
  let fixture: ComponentFixture<ArraydashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArraydashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArraydashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
