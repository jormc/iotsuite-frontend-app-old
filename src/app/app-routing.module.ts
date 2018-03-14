import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ConfigComponent } from './modules/config/config.component';
import { PageNotFoundComponent } from './modules/error/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
    {
        path: 'config',
        component: ConfigComponent
    }, 
    {
        path: 'dashboard',
        component: DashboardComponent
    }, 
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: true, // <-- debugging purposes only
            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class AppRoutingModule { }
