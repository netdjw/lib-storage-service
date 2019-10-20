import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
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
    LibStorageService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LibStorageService_Factory() { return new LibStorageService(); }, token: LibStorageService, providedIn: "root" });
    LibStorageService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], LibStorageService);
    return LibStorageService;
}());
export { LibStorageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLXN0b3JhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpYi1zdG9yYWdlLXNlcnZpY2UvIiwic291cmNlcyI6WyJsaWIvbGliLXN0b3JhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDOztBQUszQztJQUdFO1FBRlEsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7SUFFNUIsQ0FBQztJQUVqQix3Q0FBWSxHQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxtQ0FBTyxHQUFQLFVBQVEsR0FBVyxFQUFFLElBQVM7UUFDNUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELHNDQUFVLEdBQVYsVUFBVyxHQUFRO1FBQ2pCLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELGlDQUFLLEdBQUw7UUFDRSxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7SUF0QlUsaUJBQWlCO1FBSDdCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxpQkFBaUIsQ0F1QjdCOzRCQTdCRDtDQTZCQyxBQXZCRCxJQXVCQztTQXZCWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExpYlN0b3JhZ2VTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzdG9yYWdlU3ViID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHdhdGNoU3RvcmFnZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2VTdWIuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBzZXRJdGVtKGtleTogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIGRhdGEpO1xuICAgIHRoaXMuc3RvcmFnZVN1Yi5uZXh0KHRydWUpO1xuICB9XG5cbiAgcmVtb3ZlSXRlbShrZXk6IGFueSkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgdGhpcy5zdG9yYWdlU3ViLm5leHQodHJ1ZSk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICB0aGlzLnN0b3JhZ2VTdWIubmV4dCh0cnVlKTtcbiAgfVxufVxuIl19