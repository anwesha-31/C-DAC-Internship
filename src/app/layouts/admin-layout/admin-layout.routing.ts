import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { RetinalDataSubComponent } from '../../retinal-data-sub/retinal-data-sub.component';
// import { AdminLayoutComponent } from '../../layouts/admin-layout/admin-layout.component';
import { DiseaseDiagnosticComponent } from '../../disease-diagnostic/disease-diagnostic.component';
import { RetinalDataAdminComponent } from '../../retinal-data-admin/retinal-data-admin.component';
import { AnnotationComponent } from '../../annotation/annotation.component';
import { UserManagementComponent } from '../../user-management/user-management.component';
import { HomeComponent } from '../../home/home.component';
import { SignupComponent } from '../../signup/signup.component';
import { ForgotPasswordComponent } from '../../forgot-password/forgot-password.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'home',  component: HomeComponent},
    { path: 'signup',  component: SignupComponent},
    { path: 'forgotpass',  component: ForgotPasswordComponent},
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'retinal-data' , component: RetinalDataSubComponent},
    { path: 'disease-diagnostic' , component: DiseaseDiagnosticComponent},
    { path: 'retinal-admin' , component: RetinalDataAdminComponent},
    { path: 'annotation' , component: AnnotationComponent},
    { path: 'user-management' , component: UserManagementComponent}
 
];
