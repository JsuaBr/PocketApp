import { Routes } from '@angular/router';
import { Page404Component } from './shared/components/page-404/page-404.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: 'notes',
        loadChildren: () => import('./notes/notes.routes').then(m => m.NOTES_ROUTES)
    },
    {
        path: 'pomodoro',
        loadChildren: () => import('./pomodoro/pomodoro.routes').then(m => m.CLIMATE_ROUTES)
    },
    {
        path: 'diary',
        loadChildren: () => import('./diary/diary.routes').then(m => m.DIARY_ROUTES)
    },
    {
        path: 'pet',
        loadChildren: () => import('./pet/pet.routes').then(m => m.PET_ROUTES)
    },
    {
        path: '**',
        component: Page404Component
    }
];
