import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { TNavConfig } from '../../shared/types/nav-config';
import navBarData from '../json/navbar-config.json';

@Injectable({
  providedIn: 'root',
})
export class NavbarServiceService {
  getNavConfig(): Observable<TNavConfig[]> {
    return of(navBarData);
  }
}
