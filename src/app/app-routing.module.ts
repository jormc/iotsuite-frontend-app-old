import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ConfigComponent } from './modules/config/config.component';
import { PageNotFoundComponent } from './modules/error/page-not-found/page-not-found.component';
import { HomeComponent } from './modules/home/home.component';
import { WidgetListComponent } from './modules/widget/widget-list.component';
import { WidgetDetailComponent } from './modules/widget/widget-detail.component';

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
        path: 'widgets',
        component: WidgetListComponent
    },
    {
        path: 'widget/:id',
        component: WidgetDetailComponent
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
