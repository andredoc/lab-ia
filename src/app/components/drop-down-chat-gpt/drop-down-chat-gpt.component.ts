import { Component } from '@angular/core';
import { countries } from '../../countries';

interface Country {
  name: string;
  flag: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './drop-down-chat-gpt.component.html',
  styleUrls: ['./drop-down-chat-gpt.component.css']
})
export class DropdownChatGptComponent {
  countries: Country[] = countries.map((country) => ({
    name: country.name,
    flag: country.flags.png
  }));
}
