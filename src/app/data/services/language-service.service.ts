import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { TLanguageOption } from '../../shared/types/language-option';
import languageData from '../json/language-config.json';

@Injectable({
  providedIn: 'root',
})
export class LanguageServiceService {
  getLanguageOptions(): Observable<TLanguageOption[]> {
    return of(languageData);
  }
}
