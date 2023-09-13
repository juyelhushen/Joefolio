import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemsComponent } from './project-items.component';

describe('ProjectItemsComponent', () => {
  let component: ProjectItemsComponent;
  let fixture: ComponentFixture<ProjectItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
