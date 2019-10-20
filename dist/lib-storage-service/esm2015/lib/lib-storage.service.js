import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
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
LibStorageService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LibStorageService_Factory() { return new LibStorageService(); }, token: LibStorageService, providedIn: "root" });
LibStorageService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], LibStorageService);
export { LibStorageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLXN0b3JhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpYi1zdG9yYWdlLXNlcnZpY2UvIiwic291cmNlcyI6WyJsaWIvbGliLXN0b3JhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDOztBQUszQyxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQUc1QjtRQUZRLGVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO0lBRTVCLENBQUM7SUFFakIsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsT0FBTyxDQUFDLEdBQVcsRUFBRSxJQUFTO1FBQzVCLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxVQUFVLENBQUMsR0FBUTtRQUNqQixZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxLQUFLO1FBQ0gsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDRixDQUFBOztBQXZCWSxpQkFBaUI7SUFIN0IsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGlCQUFpQixDQXVCN0I7U0F2QlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMaWJTdG9yYWdlU2VydmljZSB7XG4gIHByaXZhdGUgc3RvcmFnZVN1YiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICB3YXRjaFN0b3JhZ2UoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlU3ViLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgc2V0SXRlbShrZXk6IHN0cmluZywgZGF0YTogYW55KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBkYXRhKTtcbiAgICB0aGlzLnN0b3JhZ2VTdWIubmV4dCh0cnVlKTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW0oa2V5OiBhbnkpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgIHRoaXMuc3RvcmFnZVN1Yi5uZXh0KHRydWUpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgdGhpcy5zdG9yYWdlU3ViLm5leHQodHJ1ZSk7XG4gIH1cbn1cbiJdfQ==