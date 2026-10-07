import { provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
export const appConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideHttpClient()
    ]
};
