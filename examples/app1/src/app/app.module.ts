import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { DemoCommonModule, OVERLAY_PROVIDER } from '@demo/common';
import { NgxPlanetModule } from 'ngx-planet';
import { routers } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { App1DetailComponent } from './detail/detail.component';
import { AppOverlay } from './overlay';
import { ProjectsDialogComponent } from './projects/dialog/projects-dialog.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppActualRootComponent, AppRootComponent } from './root/root.component';
import { SharedModule } from './shared.module';

@NgModule({
    declarations: [
        AppRootComponent,
        AppActualRootComponent,
        DashboardComponent,
        ProjectsComponent,
        App1DetailComponent,
        ProjectsDialogComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routers, { relativeLinkResolution: 'legacy', useHash: true }),
        // UserModule,
        FormsModule,
        SharedModule,
        DemoCommonModule,
        NgxPlanetModule,
        OverlayModule
    ],
    providers: [OVERLAY_PROVIDER, { provide: Overlay, useClass: AppOverlay }],
    bootstrap: [AppRootComponent]
})
export class AppModule {
    constructor() {}
}
