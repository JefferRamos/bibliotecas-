import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NglCoreComponent } from './ngl-core.component';

describe('NglCoreComponent', () => {
  let component: NglCoreComponent;
  let fixture: ComponentFixture<NglCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NglCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NglCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
