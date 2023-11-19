import { Component, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
import { TLanguageOption } from '../../../shared/types/language-option';
import { TNavConfig } from '../../../shared/types/nav-config';
import { NavbarServiceService } from '../../../data/services/navbar-service.service';
import { OnInit } from '@angular/core';
import { LanguageServiceService } from '../../../data/services/language-service.service';
import { SubMenuType } from '../../../shared/enums/sub-menu-type';

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

  SubMenuType = SubMenuType;
  faChevronDown = faChevronDown;
  faCartShopping = faCartShopping;
  languageOptions: TLanguageOption[] = [];
  navConfig: TNavConfig[] = [];

  constructor(
    private languageService: LanguageServiceService,
    private navbarService: NavbarServiceService
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
