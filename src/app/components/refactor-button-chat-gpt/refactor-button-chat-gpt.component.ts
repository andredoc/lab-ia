import { Component, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';

interface ButtonOptions {
  icon?: string;
  iconAlt?: string;
  iconPosition?: 'before' | 'after';
  loading?: boolean;
}

@Component({
  selector: 'refactor-app-button',
  templateUrl: './refactor-button-chat-gpt.component.html',
  styleUrls: ['./refactor-button-chat-gpt.component.css']
})
export class RefactorButtonChatGptComponent {
  @Input() options: ButtonOptions = {};
  focused: boolean = false;
  @Output() buttonClick = new EventEmitter();
  get icon() {
    return this.options.icon;
  }

  get iconAlt() {
    return this.options.iconAlt;
  }

  get iconPosition() {
    return this.options.iconPosition || 'before';
  }

  get loading() {
    return this.options.loading || false;
  }

  @HostBinding('class.loading')
  get isLoading() {
    return this.loading;
  }

  @HostListener('click')
  onClick() {
    if (!this.loading) {
      this.buttonClick.emit();
    }
  }

  onFocus() {
    this.focused = true;
  }

  onBlur() {
    this.focused = false;
  }

  onKeyup(event: KeyboardEvent ) {
    // Prevent the default action of the Enter or Spacebar key
    if (event.code === 'Enter' || event.code === 'Space') {
      event.preventDefault();
      console.log('button clicked');
    }
  }
}
