import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatButtonModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  faChevronDown = faChevronDown;

  languageOptions: TLanguageOption[] = [
    { title: 'United States', image: 'usa-flag.svg' },
    { title: 'Belgie Be', image: 'belgium-flag.jfif' },
    { title: 'Belgique Fr', image: 'belgium-flag.jfif' },
    { title: 'Deutschland', image: 'germany-flag.png' },
    { title: 'Espana', image: 'spanish-flag.png' },
    { title: 'France', image: 'france-flag.png' },
    { title: 'Ireland', image: 'ireland-flag.jpg' },
    { title: 'Italia', image: 'italy-flag.png' },
    { title: 'Nederland', image: 'nederlands-flag.png' },
    { title: 'Osterreich', image: 'austria-flag.jpg' },
    { title: 'UK', image: 'uk-flag.png' },
  ];
}

type TLanguageOption = {
  title: string;
  image: string;
};
