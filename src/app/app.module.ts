import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

// import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
// import { DiseaseDiagnosticComponent } from './disease-diagnostic/disease-diagnostic.component';
// import { RetinalDataAdminComponent } from './retinal-data-admin/retinal-data-admin.component';
// import { AnnotationComponent } from './annotation/annotation.component';
// import { UserManagementComponent } from './user-management/user-management.component';
// import { RetinalDataSubComponent } from './retinal-data-sub/retinal-data-sub.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    HomeComponent,
    SignupComponent,
    ForgotPasswordComponent,
    // DiseaseDiagnosticComponent,
    // RetinalDataAdminComponent,
    // AnnotationComponent,
    // UserManagementComponent,
    // RetinalDataSubComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
