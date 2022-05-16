import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThatComponent } from './that.component';

describe('ThatComponent', () => {
  let component: ThatComponent;
  let fixture: ComponentFixture<ThatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
