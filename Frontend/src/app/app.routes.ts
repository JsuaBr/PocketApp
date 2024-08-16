import { Routes } from '@angular/router';
import { Page404Component } from './shared/components/page-404/page-404.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./notes/notes.routes').then(m => m.NOTES_ROUTES)
    },
    {
        path: 'climate',
        loadChildren: () => import('./climate/climate.routes').then(m => m.CLIMATE_ROUTES)
    },
    {
        path: 'clock',
        loadChildren: () => import('./clock/clock.routes').then(m => m.CLOCK_ROUTES)
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
