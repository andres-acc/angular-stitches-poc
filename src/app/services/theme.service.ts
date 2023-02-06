import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themeObs: BehaviorSubject<string> = new BehaviorSubject('grass');

  getTheme(): Observable<string> {
    return this.themeObs.asObservable();
  }

  setTheme(option: string): void {
    this.themeObs.next(option);
  }
}
