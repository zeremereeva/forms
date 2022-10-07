import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private _myData$ = new BehaviorSubject<any>(this.loadInfo());

  myData() {
    return this._myData$.asObservable();
  }

  constructor(private localStorageService: LocalStorageService) {}

  loadInfo() {
    const users = this.localStorageService.getItem('Users');
    console.log('users', users);
    const data = users ? JSON.parse(users) : null;
  }
  save(body: any) {
    console.log('form service: save', body);
    return of(body);
  }

  changeAge() {
    return of(18);
  }
}
