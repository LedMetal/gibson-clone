import { Component, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChevronDown,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
import { TLanguageOption } from '../../../shared/types/language-option';
import { TNavConfig } from '../../../shared/types/nav-config';
import { OnInit } from '@angular/core';
import { SubMenuType } from '../../../shared/enums/sub-menu-type';
import { NavbarConfigService } from '../../../data/services/navbar-config.service';
import { LanguageConfigService } from '../../../data/services/language-config.service';

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
export class HeaderComponent implements OnInit {
  @ViewChildren(MatMenuTrigger) triggers: QueryList<MatMenuTrigger> | null =
    null;

  window = window;
  SubMenuType = SubMenuType;
  faChevronDown = faChevronDown;
  faCartShopping = faCartShopping;
  languageOptions: TLanguageOption[] = [];
  navConfig: TNavConfig[] = [];

  constructor(
    private languageService: LanguageConfigService,
    private navbarService: NavbarConfigService
  ) {}

  ngOnInit(): void {
    this.navbarService.getNavConfig().subscribe((data) => {
      this.navConfig = data;
    });

    this.languageService.getLanguageOptions().subscribe((data) => {
      this.languageOptions = data;
    });
  }

  toggleMenu(trigger: MatMenuTrigger): void {
    this.triggers?.forEach((trigger: MatMenuTrigger) => trigger.closeMenu());

    trigger.openMenu();
  }
}
