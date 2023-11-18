import { Component, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    FontAwesomeModule,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @ViewChildren(MatMenuTrigger) triggers: QueryList<MatMenuTrigger> | null =
    null;

  faChevronDown = faChevronDown;
  faCartShopping = faCartShopping;

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

  toggleMenu(trigger: MatMenuTrigger): void {
    this.triggers?.forEach((trigger: MatMenuTrigger) => trigger.closeMenu());

    trigger.openMenu();
  }
}

type TLanguageOption = {
  title: string;
  image: string;
};
