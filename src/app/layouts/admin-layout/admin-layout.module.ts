// after creating a component remove the import file from here and let it be in app.module to remove error adminlayout imported in more than one component



import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { RetinalDataSubComponent } from '../../retinal-data-sub/retinal-data-sub.component';
// import { AdminLayoutComponent } from '../../layouts/admin-layout/admin-layout.component';
import { DiseaseDiagnosticComponent } from '../../disease-diagnostic/disease-diagnostic.component';
import { RetinalDataAdminComponent } from '../../retinal-data-admin/retinal-data-admin.component';
import { AnnotationComponent } from '../../annotation/annotation.component';
import { UserManagementComponent } from '../../user-management/user-management.component';
// import { HomeComponent } from '../../home/home.component';
// import { SignupComponent } from '../../signup/signup.component';
// import { ForgotPasswordComponent } from '../../forgot-password/forgot-password.component';


@NgModule({
  imports: [ 
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    RetinalDataSubComponent,
    // AdminLayoutComponent,
    DiseaseDiagnosticComponent,
    RetinalDataAdminComponent,
    AnnotationComponent,
    UserManagementComponent,
    // HomeComponent,
    // SignupComponent,
    // ForgotPasswordComponent
  ]
})

export class AdminLayoutModule {}
