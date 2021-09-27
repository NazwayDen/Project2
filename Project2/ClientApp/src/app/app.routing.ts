import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent,
  CounterComponent,
  FetchDataComponent,
  PrivateRoomComponent,
  NavMenuComponent
} from './components';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'lk', component: PrivateRoomComponent }
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);
