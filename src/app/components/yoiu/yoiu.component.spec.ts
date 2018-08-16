import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoiuComponent } from './yoiu.component';

describe('YoiuComponent', () => {
  let component: YoiuComponent;
  let fixture: ComponentFixture<YoiuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoiuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoiuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
