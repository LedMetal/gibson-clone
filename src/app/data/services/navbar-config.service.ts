import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TNavConfig } from '../../shared/types/nav-config';
import navBarData from '../json/navbar-config.json';

@Injectable({
  providedIn: 'root',
})
export class NavbarConfigService {
  getNavConfig(): Observable<TNavConfig[]> {
    return of(navBarData);
  }
}
