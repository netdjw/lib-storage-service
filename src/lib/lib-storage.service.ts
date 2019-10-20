import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibStorageService {
  private storageSub = new Subject<boolean>();

  constructor() { }

  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }

  setItem(key: string, data: any) {
    localStorage.setItem(key, data);
    this.storageSub.next(true);
  }

  removeItem(key: any) {
    localStorage.removeItem(key);
    this.storageSub.next(true);
  }

  clear() {
    localStorage.clear();
    this.storageSub.next(true);
  }
}
