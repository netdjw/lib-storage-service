import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibStorageComponent } from './lib-storage.component';

describe('LibStorageComponent', () => {
  let component: LibStorageComponent;
  let fixture: ComponentFixture<LibStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
