import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// *******************************************************************************
// NgBootstrap

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// *******************************************************************************
// App

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { LayoutModule } from './layout/layout.module';
import { AgmCoreModule } from '@agm/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

// *******************************************************************************
// Pages

import { HomeComponent } from './home/home.component';
import { Page2Component } from './page-2/page-2.component';
import { LoginComponent } from './login/login.component';
import { VenueComponent } from './venue/venue.component';
import { AddvenueComponent } from './venue/addvenue/addvenue.component';
import { UpdatevenueComponent } from './venue/updatevenue/updatevenue.component';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';
import { PackageComponent } from './package/package.component';
import { AddpackageComponent } from './package/addpackage/addpackage.component';
import { UpdatepackageComponent } from './package/updatepackage/updatepackage.component';
import { ShowvenueComponent } from './venue/showvenue/showvenue.component';
import { OrderComponent } from './order/order.component';
import { ShowproductComponent } from './product/showproduct/showproduct.component';
import { ShowpackageComponent } from './package/showpackage/showpackage.component';
import { ShoworderComponent } from './order/showorder/showorder.component';
import { ShowdealComponent } from './deal/showdeal/showdeal.component';
import { MemberFromAppComponent } from './member-from-app/member-from-app.component';
import { ApproveComponent } from './member-from-app/approve/approve.component';
import { FgckFormComponent } from './fgck-form/fgck-form.component';
import { AddFgckFormComponent } from './fgck-form/add-fgck-form/add-fgck-form.component';
import { ApprovalComponent } from './fgck-form/approval/approval.component';
import { PrayerComponent } from './prayer/prayer.component';
import { ApprovePrayerComponent } from './prayer/approve-prayer/approve-prayer.component';
import { VideoComponent } from './video/video.component';
import { AddvideoComponent } from './video/addvideo/addvideo.component';
import { UpdatevideoComponent } from './video/updatevideo/updatevideo.component';
import { ShowvideoComponent } from './video/showvideo/showvideo.component';
import { AudioComponent } from './audio/audio.component';
import { UpdateaudioComponent } from './audio/updateaudio/updateaudio.component';
import { AddaudioComponent } from './audio/addaudio/addaudio.component';
import { UnapproveComponent } from './fgck-form/unapprove/unapprove.component';
import { DevotionalComponent } from './devotional/devotional.component';
import { AdddevotionalComponent } from './devotional/adddevotional/adddevotional.component';
import { UpdatedevotionalComponent } from './devotional/updatedevotional/updatedevotional.component';
import { EventComponent } from './event/event.component';
import { AddeventComponent } from './event/addevent/addevent.component';
import { UpdateeventComponent } from './event/updateevent/updateevent.component';
import { SurveyComponent } from './survey/survey.component';
import { CreatesurveyComponent } from './survey/createsurvey/createsurvey.component';
import { NotificationComponent } from './notification/notification.component';
import { CreatenotificationComponent } from './notification/createnotification/createnotification.component';
import { SignupComponent } from './signup/signup.component';
import { SubmissionComponent } from './submission/submission.component';
import { ReportsComponent } from './reports/reports.component';
 import { CreatereportComponent } from './reports/createreport/createreport.component';
import { UpdatereportComponent } from './reports/updatereport/updatereport.component';
import { DeletenotificationComponent } from './notification/deletenotification/deletenotification.component';
import { DeletesurveyComponent } from './survey/deletesurvey/deletesurvey.component';
import { DeleteeventComponent } from './event/deleteevent/deleteevent.component';
import { DeletedevotionalComponent } from './devotional/deletedevotional/deletedevotional.component';
import { UpdateFgckFormComponent } from './fgck-form/update-fgck-form/update-fgck-form.component';
import { HomephotoComponent } from './homephoto/homephoto.component';
import { InchargeComponent } from './incharge/incharge.component';
import { GetinchargeComponent } from './getincharge/getincharge.component';
import { GetimageComponent } from './getimage/getimage.component';


// *******************************************************************************
//

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page2Component,
    LoginComponent,
    VenueComponent,
    AddvenueComponent,
    UpdatevenueComponent,
    ProductComponent,
    AddproductComponent,
    UpdateproductComponent,
    PackageComponent,
    AddpackageComponent,
    UpdatepackageComponent,
    ShowvenueComponent,
    OrderComponent,
    ShowproductComponent,
    ShowpackageComponent,
    ShoworderComponent,
    ShowdealComponent,
    MemberFromAppComponent,
    ApproveComponent,
    FgckFormComponent,
    AddFgckFormComponent,
    ApprovalComponent,
    PrayerComponent,
    ApprovePrayerComponent,
    VideoComponent,
    AddvideoComponent,
    UpdatevideoComponent,
    ShowvideoComponent,
    AudioComponent,
    UpdateaudioComponent,
    AddaudioComponent,
    UnapproveComponent,
    DevotionalComponent,
    AdddevotionalComponent,
    UpdatedevotionalComponent,
    EventComponent,
    AddeventComponent,
    UpdateeventComponent,
    SurveyComponent,
    CreatesurveyComponent,
    NotificationComponent,
    CreatenotificationComponent,
    SignupComponent,
    SubmissionComponent,
    ReportsComponent,
    CreatereportComponent,
    UpdatereportComponent,
    DeletenotificationComponent,
    DeletesurveyComponent,
    DeleteeventComponent,
    DeletedevotionalComponent,
    UpdateFgckFormComponent,
    HomephotoComponent,
    InchargeComponent,
    GetinchargeComponent,
    GetimageComponent

  ],

  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    HttpClientModule,
    // App
    AppRoutingModule,
    LayoutModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA80cWOalTZWvHNwZWK9VEVVa3gYzOCKJE',
      // libraries: ['places']
  })
  ],

  providers: [
    Title,
    AppService
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
