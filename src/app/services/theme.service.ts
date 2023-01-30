import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  theme: BehaviorSubject<string> = new BehaviorSubject('primary');

  setTheme(variant: string) {
    this.theme.next(variant);
  }

  getTheme(): Observable<string> {
    return this.theme.asObservable();
  }
}
