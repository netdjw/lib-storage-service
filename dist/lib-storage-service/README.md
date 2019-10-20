# LibStorageService

LocalStorage service for Angular projects to watch, detect LocalStorage changes

## Install

`npm install lib-storage-service`

## Usage

In your `app.module.ts` (or any module.ts file):

```typescript
import { LibStorageService } from 'lib-storage-service/dist/lib-storage-service/public-api';
```

then:

```typescript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LibStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

In your components:

```typescript
import { Component } from '@angular/core';
import { LibStorageService } from 'lib-storage-service/dist/lib-storage-service/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-test-app';

  constructor(
    storageService: LibStorageService,
  ) {
    storageService.setItem('foo', 'bar');
  }
}
```

## Functions

### setItem()

Use this method to set item in `LocalStorage` and notify observers.

Usage:

```typescript
storageService.setItem(key, value);
```

### removeItem()

Use this method to remove item from `LocalStorage` and notify observers.

Usage:

```typescript
storageService.removeItem(key);
```

### clear()

Use this method to remove all item from `LocalStorage` and notify observers.

Usage:

```typescript
storageService.clear();
```

### watchStorage()

Usage:

```typescript
storageService.watchStorage().subscribe(() => {
  // check changes and handle it
});
```

## Example

Detect the `token` key changes in `LocalStorage`. If token goes to empty we call `authService.logout()` method:

```typescript
storageService.watchStorage().subscribe(() => {
  const token = LocalStorage.getItem('token');
  if (!token) {
    authService.logout();
  }
});
```
