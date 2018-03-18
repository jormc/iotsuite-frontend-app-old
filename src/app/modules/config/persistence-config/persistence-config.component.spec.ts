import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersistenceConfigComponent } from './persistence-config.component';

describe('PersistenceConfigComponent', () => {
  let component: PersistenceConfigComponent;
  let fixture: ComponentFixture<PersistenceConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersistenceConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersistenceConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
