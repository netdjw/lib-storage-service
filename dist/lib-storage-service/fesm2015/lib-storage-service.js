import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

let LibStorageService = class LibStorageService {
    constructor() {
        this.storageSub = new Subject();
    }
    watchStorage() {
        return this.storageSub.asObservable();
    }
    setItem(key, data) {
        localStorage.setItem(key, data);
        this.storageSub.next(true);
    }
    removeItem(key) {
        localStorage.removeItem(key);
        this.storageSub.next(true);
    }
    clear() {
        localStorage.clear();
        this.storageSub.next(true);
    }
};
LibStorageService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LibStorageService_Factory() { return new LibStorageService(); }, token: LibStorageService, providedIn: "root" });
LibStorageService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LibStorageService);

/*
 * Public API Surface of lib-storage
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LibStorageService };
//# sourceMappingURL=lib-storage-service.js.map
