import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThyButtonModule } from 'ngx-tethys/button';
import { ThyCardModule } from 'ngx-tethys/card';
import { ThyDialogModule } from 'ngx-tethys/dialog';
import { ThyIconModule } from 'ngx-tethys/icon';
import { ThyInputModule } from 'ngx-tethys/input';
import { ThyLayoutModule } from 'ngx-tethys/layout';
import { ThyListModule } from 'ngx-tethys/list';
import { ThyLoadingModule } from 'ngx-tethys/loading';
import { ThyMenuModule } from 'ngx-tethys/menu';
import { ThyNavModule } from 'ngx-tethys/nav';
import { ThyTableModule } from 'ngx-tethys/table';

import { DemoCommonModule } from '@demo/common';
import { NgxPlanetModule } from 'ngx-planet';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule,
        ThyLayoutModule,
        ThyButtonModule,
        ThyListModule,
        ThyDialogModule,
        ThyMenuModule,
        ThyCardModule,
        ThyLoadingModule,
        ThyTableModule,
        ThyNavModule,
        ThyInputModule,
        ThyIconModule,
        DemoCommonModule,
        NgxPlanetModule
    ],
    exports: [
        CommonModule,
        RouterModule,
        ThyLayoutModule,
        ThyButtonModule,
        ThyListModule,
        ThyDialogModule,
        ThyMenuModule,
        ThyCardModule,
        ThyLoadingModule,
        ThyTableModule,
        ThyNavModule,
        ThyInputModule,
        ThyIconModule,
        DemoCommonModule,
        NgxPlanetModule
    ],
    providers: []
})
export class SharedModule {}
