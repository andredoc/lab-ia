import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefactorButtonChatGptComponent } from './refactor-button-chat-gpt.component';

describe('ButtonChatGptComponent', () => {
  let component: RefactorButtonChatGptComponent;
  let fixture: ComponentFixture<RefactorButtonChatGptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefactorButtonChatGptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefactorButtonChatGptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
