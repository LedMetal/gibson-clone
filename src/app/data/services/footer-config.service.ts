import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TFooterConfig } from '../../shared/types/footer-config';
import footerConfigData from '../json/footer-config.json';

@Injectable({
  providedIn: 'root',
})
export class FooterConfigService {
  getFooterConfig(): Observable<TFooterConfig[]> {
    return of(footerConfigData);
  }
}
