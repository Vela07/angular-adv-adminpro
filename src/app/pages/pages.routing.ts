import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesaComponent } from './promesa/promesa.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
          { path: '', component: DashboardComponent, data: { titulo: 'Dashnoard'} },
          { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress'} },
          { path: 'grafica1', component: Grafica1Component, data: { titulo: 'Grafica'} },
          { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes'} },
          { path: 'promesa', component: PromesaComponent, data: { titulo: 'Promesas'} },
          { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RXJS'} },
        //  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
})

export class PagesRoutingModule {}