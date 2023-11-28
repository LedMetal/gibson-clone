import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TLanguageOption } from '../../shared/types/language-option';
import languageData from '../json/language-config.json';

@Injectable({
  providedIn: 'root',
})
export class LanguageConfigService {
  getLanguageOptions(): Observable<TLanguageOption[]> {
    return of(languageData);
  }
}
