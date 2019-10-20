import { Observable } from 'rxjs';
export declare class LibStorageService {
    private storageSub;
    constructor();
    watchStorage(): Observable<any>;
    setItem(key: string, data: any): void;
    removeItem(key: any): void;
    clear(): void;
}
