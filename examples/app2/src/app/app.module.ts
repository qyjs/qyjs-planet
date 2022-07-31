import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Overlay } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';
import { DemoCommonModule, OVERLAY_PROVIDER } from '@demo/common';
import { EmptyComponent, NgxPlanetModule } from 'ngx-planet';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppOverlay } from './overlay';
import { ProjectDetailComponent } from './projects/detail/detail.component';
import { ProjectListComponent } from './projects/project-list.component';
import { ProjectResolver } from './projects/project.resolver';
import { TasksComponent } from './projects/tasks/tasks.component';
import { ViewComponent } from './projects/view/view.component';
import { AppActualRootComponent, AppRootComponent } from './root/root.component';
import { SharedModule } from './shared.module';

const routers: Route[] = [
    {
        path: 'app2',
        component: AppActualRootComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'users',
                loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)
            },
            {
                path: 'projects',
                component: ProjectListComponent
            },
            {
                path: 'projects/:id',
                component: ProjectDetailComponent,
                resolve: {
                    project: ProjectResolver
                },
                children: [
                    {
                        path: 'tasks',
                        component: TasksComponent,
                        children: [
                            {
                                path: ':viewId',
                                component: ViewComponent
                            }
                        ]
                    }
                ]
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            }
        ]
    },
    {
        path: '**',
        component: EmptyComponent
    }
];

@NgModule({
    declarations: [
        AppActualRootComponent,
        AppRootComponent,
        ProjectListComponent,
        DashboardComponent,
        ProjectDetailComponent,
        TasksComponent,
        ViewComponent
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        BrowserModule,
        RouterModule.forRoot(routers, { relativeLinkResolution: 'legacy', useHash: true }),
        SharedModule,
        DemoCommonModule,
        NgxPlanetModule
    ],
    providers: [OVERLAY_PROVIDER, { provide: Overlay, useClass: AppOverlay }],
    bootstrap: [AppRootComponent]
})
export class AppModule {}
