import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonChatGptComponent } from './button-chat-gpt.component';

describe('ButtonChatGptComponent', () => {
  let component: ButtonChatGptComponent;
  let fixture: ComponentFixture<ButtonChatGptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonChatGptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonChatGptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
