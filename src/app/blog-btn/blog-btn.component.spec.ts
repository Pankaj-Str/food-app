import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBtnComponent } from './blog-btn.component';

describe('BlogBtnComponent', () => {
  let component: BlogBtnComponent;
  let fixture: ComponentFixture<BlogBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
