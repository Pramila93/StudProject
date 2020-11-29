import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenfoundComponent } from './pagenfound.component';

describe('PagenfoundComponent', () => {
  let component: PagenfoundComponent;
  let fixture: ComponentFixture<PagenfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagenfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
