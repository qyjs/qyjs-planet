import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from 'ngx-planet';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'settings',
        component: SettingsComponent
    },
    {
        path: 'app1',
        component: EmptyComponent,
        children: [
            {
                path: '**',
                component: EmptyComponent
            }
        ]
    },
    {
        path: 'app2',
        component: EmptyComponent,
        children: [
            {
                path: '**',
                component: EmptyComponent
            }
        ]
    },
    {
        path: 'app4',
        component: EmptyComponent,
        children: [
            {
                path: '**',
                component: EmptyComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
