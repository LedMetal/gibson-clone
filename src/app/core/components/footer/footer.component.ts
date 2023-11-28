import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronRight, faComments } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faTwitter,
  faYoutube,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
import { FooterConfigService } from '../../../data/services/footer-config.service';
import { TFooterConfig } from '../../../shared/types/footer-config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  faChevronRight = faChevronRight;
  faComments = faComments;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faFacebookF = faFacebookF;

  footerConfig: TFooterConfig[] = [];

  constructor(private footerConfigService: FooterConfigService) {}

  ngOnInit(): void {
    this.footerConfigService.getFooterConfig().subscribe((config) => {
      this.footerConfig = config;
    });
  }
}
