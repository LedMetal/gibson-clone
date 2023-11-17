import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './core/components/page-layout/page-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PageLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
