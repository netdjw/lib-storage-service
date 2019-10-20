import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

var LibStorageService = /** @class */ (function () {
    function LibStorageService() {
        this.storageSub = new Subject();
    }
    LibStorageService.prototype.watchStorage = function () {
        return this.storageSub.asObservable();
    };
    LibStorageService.prototype.setItem = function (key, data) {
        localStorage.setItem(key, data);
        this.storageSub.next(true);
    };
    LibStorageService.prototype.removeItem = function (key) {
        localStorage.removeItem(key);
        this.storageSub.next(true);
    };
    LibStorageService.prototype.clear = function () {
        localStorage.clear();
        this.storageSub.next(true);
    };
    LibStorageService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LibStorageService_Factory() { return new LibStorageService(); }, token: LibStorageService, providedIn: "root" });
    LibStorageService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], LibStorageService);
    return LibStorageService;
}());

/*
 * Public API Surface of lib-storage
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LibStorageService };
//# sourceMappingURL=lib-storage-service.js.map
