import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingformComponent } from './votingform.component';

describe('VotingformComponent', () => {
  let component: VotingformComponent;
  let fixture: ComponentFixture<VotingformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
