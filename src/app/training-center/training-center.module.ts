import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AngularMaterialModule } from '../angular-material.module';
import { LayoutModule } from '../layout/layout.module';
import { RefBlockDetailComponent } from './components/refblock-detail/refblock-detail.component';
import { RefBlockListItemComponent } from './components/refblock-list-item/refblock-list-item.component';
import { CoursePage } from './course/course.page';
import { CourseService } from './course/providers/course.service';
import { TrainingCenterRoutingModule } from './training-center-routing.module';
import { TrainingCenterPage } from './training-center.page';
import { TrainingCenterState } from './training-center.state';

@NgModule({
  declarations: [
    TrainingCenterPage,
    CoursePage,
    RefBlockListItemComponent,
    RefBlockDetailComponent
  ],
  imports: [
    CommonModule,
    NgxsModule.forFeature([TrainingCenterState]),
    TrainingCenterRoutingModule,
    AngularMaterialModule,
    LayoutModule
  ],
  providers: [CourseService]
})
export class TrainingCenterModule {}
