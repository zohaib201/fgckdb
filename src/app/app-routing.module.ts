import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// *******************************************************************************
// Guard
import { LoginGuard} from './guard/login.guard';

// *******************************************************************************
// Layouts

import { Layout1Component } from './layout/layout-1/layout-1.component';
import { LayoutBlankComponent } from './layout/layout-blank/layout-blank.component';

// *******************************************************************************
// Pages

import { HomeComponent } from './home/home.component';
import { Page2Component } from './page-2/page-2.component';
import { LoginComponent } from './login/login.component';
import { AddvenueComponent } from './venue/addvenue/addvenue.component';
import { UpdatevenueComponent } from './venue/updatevenue/updatevenue.component';
import { VenueComponent } from './venue/venue.component';
import { ProductComponent } from './product/product.component';
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { AddpackageComponent } from './package/addpackage/addpackage.component';
import { UpdatepackageComponent } from './package/updatepackage/updatepackage.component';
import { PackageComponent } from './package/package.component';
import { OrderComponent } from './order/order.component';
import { ShowproductComponent } from './product/showproduct/showproduct.component';
import { ShowvenueComponent } from './venue/showvenue/showvenue.component';
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
import { AddvideoComponent } from './video/addvideo/addvideo.component';
import { UpdatevideoComponent } from './video/updatevideo/updatevideo.component';
import { VideoComponent } from './video/video.component';
import { ShowvideoComponent } from './video/showvideo/showvideo.component';
import { AudioComponent } from './audio/audio.component';
import { AddaudioComponent } from './audio/addaudio/addaudio.component';
import { UpdateaudioComponent } from './audio/updateaudio/updateaudio.component';
import { UnapproveComponent } from './fgck-form/unapprove/unapprove.component';
import { AdddevotionalComponent } from './devotional/adddevotional/adddevotional.component';
import { UpdatedevotionalComponent } from './devotional/updatedevotional/updatedevotional.component';
import { DevotionalComponent } from './devotional/devotional.component';
import { EventComponent } from './event/event.component';
import { AddeventComponent } from './event/addevent/addevent.component';
import { UpdateeventComponent } from './event/updateevent/updateevent.component';
import {SurveyComponent} from './survey/survey.component';
import {CreatesurveyComponent} from './survey/createsurvey/createsurvey.component';
import {NotificationComponent} from './notification/notification.component';
import {CreatenotificationComponent} from './notification/createnotification/createnotification.component';
import { SignupComponent } from './signup/signup.component';
import { SubmissionComponent } from './submission/submission.component';
import { CreatereportComponent } from './reports/createreport/createreport.component';
import { UpdatereportComponent } from './reports/updatereport/updatereport.component';
import { ReportsComponent } from './reports/reports.component';
import {DeletenotificationComponent} from './notification/deletenotification/deletenotification.component';
import {DeletesurveyComponent} from './survey/deletesurvey/deletesurvey.component';
import {DeleteeventComponent} from './event/deleteevent/deleteevent.component';
import {DeletedevotionalComponent} from './devotional/deletedevotional/deletedevotional.component';
import {UpdateFgckFormComponent} from './fgck-form/update-fgck-form/update-fgck-form.component';
import {HomephotoComponent} from './homephoto/homephoto.component';
import {InchargeComponent} from './incharge/incharge.component';
import {GetimageComponent} from './getimage/getimage.component';
import {GetinchargeComponent} from './getincharge/getincharge.component';

// *******************************************************************************
// Routes

const routes: Routes = [

  { path: '', component: Layout1Component, canActivate: [LoginGuard], pathMatch: 'full', children: [
    { path: '', component: HomeComponent , canActivate: [LoginGuard]},
  ]},

  { path: 'venue', component: Layout1Component, canActivate: [LoginGuard],  children: [
    { path: 'create', component: AddvenueComponent , canActivate: [LoginGuard]},
    { path: 'update/:venueId', component: UpdatevenueComponent , canActivate: [LoginGuard]},
    { path: 'view/:venueId', component: ShowvenueComponent , canActivate: [LoginGuard]},
    { path: '', component: VenueComponent , canActivate: [LoginGuard], pathMatch: 'full'}
  ]},

  { path: 'product', component: Layout1Component, canActivate: [LoginGuard],  children: [
    { path: 'create', component: AddproductComponent , canActivate: [LoginGuard]},
    { path: 'update/:productId', component: UpdateproductComponent , canActivate: [LoginGuard]},
    { path: 'view/:productId', component: ShowproductComponent , canActivate: [LoginGuard]},
    { path: '', component: ProductComponent , canActivate: [LoginGuard], pathMatch: 'full'}
  ]},

  { path: 'package', component: Layout1Component, canActivate: [LoginGuard],  children: [
    { path: 'create', component: AddpackageComponent , canActivate: [LoginGuard]},
    { path: 'update/:packageId', component: UpdatepackageComponent , canActivate: [LoginGuard]},
    { path: 'view/:packageId', component: ShowpackageComponent , canActivate: [LoginGuard]},
    { path: '', component: PackageComponent , canActivate: [LoginGuard], pathMatch: 'full'}
  ]},

  { path: 'order', component: Layout1Component, canActivate: [LoginGuard],  children: [
    { path: 'create', component: AddpackageComponent , canActivate: [LoginGuard]},
    { path: 'update/:orderId', component: UpdatepackageComponent , canActivate: [LoginGuard]},
    { path: 'view/:orderId', component: ShoworderComponent , canActivate: [LoginGuard]},
    { path: '', component: OrderComponent , canActivate: [LoginGuard], pathMatch: 'full'}
  ]},

  { path: 'deal', component: Layout1Component, canActivate: [LoginGuard],  children: [
    { path: 'create', component: ShowdealComponent , canActivate: [LoginGuard]},
    { path: 'update/:dealId', component: ShowdealComponent , canActivate: [LoginGuard]},
    { path: 'view/:dealId', component: ShowdealComponent , canActivate: [LoginGuard]},
    { path: '', component: ShowdealComponent , canActivate: [LoginGuard], pathMatch: 'full'}
  ]},
  { path: 'member_from_app', component: Layout1Component, canActivate: [LoginGuard],  children: [
    // { path: 'create', component: ShowdealComponent , canActivate: [LoginGuard]},
    { path: 'approve/:member_from_app_id', component: ApproveComponent , canActivate: [LoginGuard]},
    // { path: 'view/:dealId', component: ShowdealComponent , canActivate: [LoginGuard]},
    { path: '', component: MemberFromAppComponent , canActivate: [LoginGuard], pathMatch: 'full'}
  ]},
  { path: 'fgck-form', component: Layout1Component, canActivate: [LoginGuard],  children: [
    { path: 'create/:mfap_id', component: AddFgckFormComponent , canActivate: [LoginGuard]},
    { path: 'update', component: UpdateFgckFormComponent , canActivate: [LoginGuard]},
    { path: 'approve/:member_id', component: ApprovalComponent , canActivate: [LoginGuard]},
    { path: 'unapprove/:member_id', component: UnapproveComponent , canActivate: [LoginGuard]},
    { path: '', component: FgckFormComponent , canActivate: [LoginGuard], pathMatch: 'full'}
  ]},

  { path: 'prayer', component: Layout1Component, canActivate: [LoginGuard],  children: [
    // { path: 'create', component: ShowdealComponent , canActivate: [LoginGuard]},
    { path: 'approve/:prayer_id', component: ApprovePrayerComponent , canActivate: [LoginGuard]},
    // { path: 'view/:dealId', component: ShowdealComponent , canActivate: [LoginGuard]},
    { path: '', component: PrayerComponent , canActivate: [LoginGuard], pathMatch: 'full'}
  ]},

  { path: 'video', component: Layout1Component, canActivate: [LoginGuard],  children: [
    { path: 'create', component: AddvideoComponent , canActivate: [LoginGuard]},
    { path: 'update/:videoId', component: UpdatevideoComponent , canActivate: [LoginGuard]},
    { path: 'view/:videoId', component: ShowvideoComponent , canActivate: [LoginGuard]},
    { path: '', component: VideoComponent , canActivate: [LoginGuard], pathMatch: 'full'}
  ]},

  { path: 'audio', component: Layout1Component, canActivate: [LoginGuard],  children: [
    { path: 'create', component: AddaudioComponent , canActivate: [LoginGuard]},
    { path: 'update/:audioId', component: UpdateaudioComponent , canActivate: [LoginGuard]},
    { path: 'view/:audioId', component: ShowvideoComponent , canActivate: [LoginGuard]},
    { path: '', component: AudioComponent , canActivate: [LoginGuard], pathMatch: 'full'}
  ]},

  { path: 'devotional', component: Layout1Component, canActivate: [LoginGuard],  children: [
    { path: 'create', component: AdddevotionalComponent , canActivate: [LoginGuard]},
    { path: 'update/:devotionalId', component: UpdatedevotionalComponent , canActivate: [LoginGuard]},
    { path: 'view/:devotionalId', component: ShowvideoComponent , canActivate: [LoginGuard]},
          { path: '', component: DevotionalComponent , canActivate: [LoginGuard], pathMatch: 'full'},
          { path: 'delete/:did', component: DeletedevotionalComponent}
  ]},

  { path: 'event', component: Layout1Component, canActivate: [LoginGuard],  children: [
    { path: 'create', component: AddeventComponent , canActivate: [LoginGuard]},
    { path: 'update/:eventId', component: UpdateeventComponent , canActivate: [LoginGuard]},
    { path: 'view/:eventId', component: ShowvideoComponent , canActivate: [LoginGuard]},
          { path: '', component: EventComponent , canActivate: [LoginGuard], pathMatch: 'full'},
          { path: 'delete/:did', component: DeleteeventComponent , canActivate: [LoginGuard], pathMatch: 'full'}
  ]},

  { path: 'report', component: Layout1Component, canActivate: [LoginGuard],  children: [
    { path: 'create', component: CreatereportComponent , canActivate: [LoginGuard]},
    { path: 'update/:reportId', component: UpdatereportComponent , canActivate: [LoginGuard]},
    { path: '', component: ReportsComponent , canActivate: [LoginGuard], pathMatch: 'full'}
  ]},

  { path: 'survey', component: Layout1Component, canActivate: [LoginGuard],  children: [
    { path: '', component: SurveyComponent , canActivate: [LoginGuard]},
          { path: 'create', component: CreatesurveyComponent , canActivate: [LoginGuard]},
          { path: 'delete/:did', component: DeletesurveyComponent , canActivate: [LoginGuard]}
  ]},

{ path: 'notification', component: Layout1Component, canActivate: [LoginGuard],  children: [
    { path: '', component: NotificationComponent , canActivate: [LoginGuard]},
        { path: 'create', component: CreatenotificationComponent , canActivate: [LoginGuard]},
        { path: 'delete/:did', component: DeletenotificationComponent , canActivate: [LoginGuard]}
]},

{ path: 'Survey_Reports', component: Layout1Component, canActivate: [LoginGuard],  children: [
  { path: '', component: SubmissionComponent , canActivate: [LoginGuard]}
 ]},

  { path: 'homephoto', component: Layout1Component, canActivate: [LoginGuard],  children: [
      { path: '', component: HomephotoComponent , canActivate: [LoginGuard]}
    ]},

  { path: 'incharge', component: Layout1Component, canActivate: [LoginGuard],  children: [
      { path: '', component: InchargeComponent , canActivate: [LoginGuard]}
    ]},
  { path: 'getimage', component: Layout1Component, canActivate: [LoginGuard],  children: [
      { path: '', component: GetimageComponent , canActivate: [LoginGuard]}
    ]},
  { path: 'getincharge', component: Layout1Component, canActivate: [LoginGuard],  children: [
      { path: '', component: GetinchargeComponent , canActivate: [LoginGuard]}
    ]},




    { path: 'login', component: LayoutBlankComponent, children: [
    { path: '', component: LoginComponent },

  ]},



  { path: 'signup', component: LayoutBlankComponent, children: [
    { path: '', component: SignupComponent },
  ]}

];

// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
