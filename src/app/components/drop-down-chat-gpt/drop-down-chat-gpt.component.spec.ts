import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownChatGptComponent } from './drop-down-chat-gpt.component';

describe('DropDownChatGptComponent', () => {
  let component: DropDownChatGptComponent;
  let fixture: ComponentFixture<DropDownChatGptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDownChatGptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropDownChatGptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
