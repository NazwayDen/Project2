import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PrivateRoomComponent } from './components/private-room/private-room.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'lk', component: PrivateRoomComponent }
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);