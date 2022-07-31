import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SectionCardComponent } from './section-card/section-card.component';

@NgModule({
    declarations: [SectionCardComponent],
    imports: [CommonModule],
    exports: [SectionCardComponent]
})
export class DemoCommonModule {}
