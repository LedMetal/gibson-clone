import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronRight, faComments } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faTwitter,
  faYoutube,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  faChevronRight = faChevronRight;
  faComments = faComments;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faFacebookF = faFacebookF;
}
