import { RestService } from '../services/rest/restservice';
import { HttpModule } from '@angular/http';


import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts';
import {CKEditorModule} from 'ng2-ckeditor';
import { IonRangeSliderModule } from "ng2-ion-range-slider";
import { NgCalendarModule  } from 'ionic2-calendar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { NewRegistrationPage } from '../pages/new-registration/new-registration';
import { NewApplicantPage } from '../pages/new-registration/new-applicant/new-applicant';
import { ConfirmemailPage } from '../pages/confirmemail/confirmemail';
import { EmailisverifiedPage } from '../pages/emailisverified/emailisverified';
import { PhonenumberPage } from '../pages/phonenumber/phonenumber';
import { ConfirmphonenumberPage } from '../pages/confirmphonenumber/confirmphonenumber';
import { PhonenumberisverifiedPage } from '../pages/phonenumberisverified/phonenumberisverified';
import { PersonaldetailsPage } from '../pages/personaldetails/personaldetails';
import { FamilyPage } from '../pages/family/family';
import { TermsofusePage } from '../pages/termsofuse/termsofuse';
import { PrivacyPage } from '../pages/privacy/privacy';
import { FamilyregisterPage } from '../pages/familyregister/familyregister';
import { InvitationtoregisterPage } from '../pages/invitationtoregister/invitationtoregister';
import { AddteacherinfoPage } from '../pages/addteacherinfo/addteacherinfo';
import { AddstudentinfoPage } from '../pages/addstudentinfo/addstudentinfo';
import { ApplicationsregisterPage } from '../pages/applicationsregister/applicationsregister';
import { LogincidentPage } from '../pages/logincident/logincident';
import { QuickactionPage } from '../pages/quickactions/quickaction';
import { PanicPage } from '../pages/quickactions/panic';
import { AbsencePage } from '../pages/quickactions/absence';
import { InboxPage } from '../pages/inbox/inbox';
import { InboxlistPage } from '../pages/inbox/inboxlist/inboxlist';

import { QuickactionPrincipalPage } from '../pages/quickaction-principal/quickaction-principal';
import { QuickactionBookPage } from '../pages/quickaction-book/quickaction-book';
import { QuickactionBookEquipmentRoomPage } from '../pages/quickaction-book/quickaction-book-equipment-room';
import { QuickactionRolecallPage } from '../pages/quickaction-rolecall/quickaction-rolecall';

import { TempteacherapplyPage } from '../pages/tempteacherapply/tempteacherapply';
import { TempteacherPage } from '../pages/tempteacherapply/tempteacher/tempteacher';
import { Tempteacherapply1Page } from '../pages/tempteacherapply/tempteacherapply1/tempteacherapply1';
import { Tempteacher1Page } from '../pages/tempteacherapply/tempteacher1/tempteacher1';
import { Absentteachers1Page } from '../pages/tempteacherapply/absentteachers1/absentteachers1';

import { ListofactiveschoolPage } from '../pages/school-management/listofactiveschool/listofactiveschool';
import { ListofequipmentsPage } from '../pages/school-management/listofequipments/listofequipments';
import { EquipmentshedulePage } from '../pages/school-management/equipmentshedule/equipmentshedule';
import { TermsPage } from '../pages/school-management/terms/terms';
import { HolydaysPage } from '../pages/school-management/holydays/holydays';
import { AddyearsPage } from '../pages/school-management/addyears/addyears';
import { AddyearsmobPage } from '../pages/school-management/addyearsmob/addyearsmob';
import { AddroomPage } from '../pages/school-management/addroom/addroom';
import { AddaddressPage } from '../pages/school-management/addaddress/addaddress';
import { AddaddressmobPage } from '../pages/school-management/addaddressmob/addaddressmob';
import { AddschoolPage } from '../pages/school-management/addschool/addschool';
import { ClassshedulePage } from '../pages/school-management/classshedule/classshedule';
import { MobilestagePage } from '../pages/school-management/mobilestage/mobilestage';

import { ListofactivecurriculumPage } from '../pages/curriculums/listofactivecurriculum/listofactivecurriculum';
import { NewcurriculumPage } from '../pages/curriculums/newcurriculum/newcurriculum';
import { AddclassPage } from '../pages/curriculums/addclass/addclass';
import { AddsubjectPage } from '../pages/curriculums/addsubject/addsubject';
import { AddsubsectionPage } from '../pages/curriculums/addsubsection/addsubsection';
import { SchedulePage } from '../pages/curriculums/schedule/schedule';
import { Schedule1Page } from '../pages/curriculums/schedule1/schedule1';

import { DashboardBoardPage } from '../pages/dashboard-board/dashboard-board';

import { ListofassignmentsPage } from '../pages/dashboard-parent/listofassignments/listofassignments';
import { AddstudentaddressPage } from '../pages/dashboard-parent/addstudentaddress/addstudentaddress';
import { ParentaddressPage } from '../pages/dashboard-parent/parentaddress/parentaddress';
import { ActivitiesparentPage } from '../pages/dashboard-parent/activitiesparent/activitiesparent';
import { StudenteditmodePage } from '../pages/dashboard-parent/studenteditmode/studenteditmode';
import { TeacherprofilePage } from '../pages/dashboard-parent/teacherprofile/teacherprofile';
import { StudentprofileParentPage } from '../pages/dashboard-parent/studentprofile-parent/studentprofile-parent';
import { ParentprofileParentPage } from '../pages/dashboard-parent/parentprofile-parent/parentprofile-parent';
import { PermissionTypeaheadPage } from '../pages/dashboard-parent/permission-typeahead/permission-typeahead';
import { MathteacherParentPage } from '../pages/dashboard-parent/mathteacher-parent/mathteacher-parent';

import { ListofteachersPrincipalPage } from '../pages/dashboard-principal/listofteachers-principal/listofteachers-principal';
import { YearprincipalPage } from '../pages/dashboard-principal/yearprincipal/yearprincipal';
import { PrincipalUserprofilePage } from '../pages/dashboard-principal/principal-userprofile/principal-userprofile';
import { StudentprofilePrincipalPage } from '../pages/dashboard-principal/studentprofile-principal/studentprofile-principal';
import { PrincipalprofilePrincipalPage } from '../pages/dashboard-principal/principalprofile-principal/principalprofile-principal';

import { TeacherUserprofilePage } from '../pages/dashboard-teacher/teacher-userprofile/teacher-userprofile';
import { ActivitiesteacherPage } from '../pages/dashboard-teacher/activitiesteacher/activitiesteacher';
import { TeacherprofileTeacherPage } from '../pages/dashboard-teacher/teacherprofile-teacher/teacherprofile-teacher';
import { ListofassignmentsTeacherPage } from '../pages/dashboard-teacher/listofassignments-teacher/listofassignments-teacher';
import { DisablealertTeacherPage } from '../pages/dashboard-teacher/disablealert-teacher/disablealert-teacher';
import { AddincidentPage } from '../pages/dashboard-teacher/addincident/addincident';
import { AddalertTeacherPage } from '../pages/dashboard-teacher/addalert-teacher/addalert-teacher';
import { StudentprofileTeacherPage } from '../pages/dashboard-teacher/studentprofile-teacher/studentprofile-teacher';
import { MathteacherTeacherPage } from '../pages/dashboard-teacher/mathteacher-teacher/mathteacher-teacher';

import { PersonalprofilePrincipalPage } from '../pages/personal-profile/personalprofile-principal/personalprofile-principal';
import { PersonalprofileTeacherPage } from '../pages/personal-profile/personalprofile-teacher/personalprofile-teacher';
import { PersonalprofileStudentviewmodePage } from '../pages/personal-profile/personalprofile-studentviewmode/personalprofile-studentviewmode';
import { ParentprofilePersonalprofilePage } from '../pages/personal-profile/parentprofile-personalprofile/parentprofile-personalprofile';

import { ListofassignmentsStudentPage } from '../pages/dashboard-student/listofassignments-student/listofassignments-student';
import { StudentviewmodePage } from '../pages/dashboard-student/studentviewmode/studentviewmode';
import { StudentprofileStudentPage } from '../pages/dashboard-student/studentprofile-student/studentprofile-student';
import { MathstudentPage } from '../pages/dashboard-student/mathstudent/mathstudent';

import { ListofassignmentsLessonPage } from '../pages/lesson-and-assignments/listofassignments-lesson/listofassignments-lesson';
import { AddassigneesPage } from '../pages/lesson-and-assignments/addassignees/addassignees';
import { NewassignmentsPage } from '../pages/lesson-and-assignments/newassignments/newassignments';
import { AddsectionPage } from '../pages/lesson-and-assignments/addsection/addsection';
import { LessonPage } from '../pages/lesson-and-assignments/lesson/lesson';

import { InvitePage } from '../pages/event-management/invite/invite';
import { PubliceventPage } from '../pages/event-management/publicevent/publicevent';
import { PrivateeventPage } from '../pages/event-management/privateevent/privateevent';
import { EventdetailsPage } from '../pages/event-management/eventdetails/eventdetails';
import { EventsPage } from '../pages/event-management/events/events';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
	LoginPage,
	RegisterPage,
  NewRegistrationPage,
  NewApplicantPage,
	ConfirmemailPage,
	EmailisverifiedPage,
	PhonenumberPage,
	ConfirmphonenumberPage,
	PhonenumberisverifiedPage,
	PersonaldetailsPage,
	FamilyPage,
	TermsofusePage,
	PrivacyPage,
	FamilyregisterPage,
	InvitationtoregisterPage,
	AddteacherinfoPage,
	AddstudentinfoPage,
	ApplicationsregisterPage,
	QuickactionPage,
	PanicPage,
	AbsencePage,
	QuickactionPrincipalPage,
	QuickactionBookPage,
	LogincidentPage,
	QuickactionRolecallPage,
	QuickactionBookEquipmentRoomPage,
	TempteacherapplyPage,
	TempteacherPage,
	Tempteacherapply1Page,
	Tempteacher1Page,
	Absentteachers1Page,
	ListofactiveschoolPage,
	ListofequipmentsPage,
	EquipmentshedulePage,
	TermsPage,
	HolydaysPage,
	AddyearsPage,
	AddroomPage,
	AddaddressPage,
	AddschoolPage,
	ClassshedulePage,
	ListofactivecurriculumPage,
	NewcurriculumPage,
	AddclassPage,
	AddsubjectPage,
	AddsubsectionPage,
	DashboardBoardPage,
	ListofassignmentsPage,
	ListofassignmentsStudentPage,
	AddstudentaddressPage,
	ParentaddressPage,
	ActivitiesparentPage,
	StudenteditmodePage,
	TeacherprofilePage,
	ListofteachersPrincipalPage,
	YearprincipalPage,
	PrincipalUserprofilePage,
	PersonalprofilePrincipalPage,
	PersonalprofileTeacherPage,
	StudentviewmodePage,
	PersonalprofileStudentviewmodePage,
	TeacherUserprofilePage,
	ActivitiesteacherPage,
	TeacherprofileTeacherPage,
	ListofassignmentsTeacherPage,
	DisablealertTeacherPage,
	AddincidentPage,
	AddalertTeacherPage,
	StudentprofileTeacherPage,
	StudentprofileParentPage,
	ParentprofileParentPage,
	StudentprofilePrincipalPage,
	StudentprofileStudentPage,
	ParentprofilePersonalprofilePage,
	PrincipalprofilePrincipalPage,
	PermissionTypeaheadPage,
	MathteacherParentPage,
	MathteacherTeacherPage,
	MathstudentPage,
	SchedulePage,
	Schedule1Page,
	MobilestagePage,
	ListofassignmentsLessonPage,
	AddassigneesPage,
	NewassignmentsPage,
	AddsectionPage,
	LessonPage,
	InvitePage,
	PubliceventPage,
	PrivateeventPage,
	EventdetailsPage,
	EventsPage,
	InboxPage,
	InboxlistPage,
	AddaddressmobPage,
	AddyearsmobPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	 ChartsModule,
	 CKEditorModule,
	 IonRangeSliderModule,
	 NgCalendarModule,
   HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
	LoginPage,
	RegisterPage,
  NewRegistrationPage,
  NewApplicantPage,
	ConfirmemailPage,
	EmailisverifiedPage,
	PhonenumberPage,
	ConfirmphonenumberPage,
	PhonenumberisverifiedPage,
	PersonaldetailsPage,
	FamilyPage,
	TermsofusePage,
	PrivacyPage,
	FamilyregisterPage,
	InvitationtoregisterPage,
	AddteacherinfoPage,
	AddstudentinfoPage,
	ApplicationsregisterPage,
	QuickactionPage,
	PanicPage,
	AbsencePage,
	QuickactionPrincipalPage,
	QuickactionBookPage,
	LogincidentPage,
	QuickactionRolecallPage,
	QuickactionBookEquipmentRoomPage,
	TempteacherapplyPage,
	TempteacherPage,
	Tempteacherapply1Page,
	Tempteacher1Page,
	Absentteachers1Page,
	ListofactiveschoolPage,
	ListofequipmentsPage,
	EquipmentshedulePage,
	TermsPage,
	HolydaysPage,
	AddyearsPage,
	AddroomPage,
	AddaddressPage,
	AddschoolPage,
	ClassshedulePage,
	ListofactivecurriculumPage,
	NewcurriculumPage,
	AddclassPage,
	AddsubjectPage,
	AddsubsectionPage,
	DashboardBoardPage,
	ListofassignmentsPage,
	ListofassignmentsStudentPage,
	AddstudentaddressPage,
	ParentaddressPage,
	ActivitiesparentPage,
	StudenteditmodePage,
	TeacherprofilePage,
	ListofteachersPrincipalPage,
	YearprincipalPage,
	PrincipalUserprofilePage,
	PersonalprofilePrincipalPage,
	PersonalprofileTeacherPage,
	StudentviewmodePage,
	PersonalprofileStudentviewmodePage,
	TeacherUserprofilePage,
	ActivitiesteacherPage,
	TeacherprofileTeacherPage,
	ListofassignmentsTeacherPage,
	DisablealertTeacherPage,
	AddincidentPage,
	AddalertTeacherPage,
	StudentprofileTeacherPage,
	StudentprofileParentPage,
	ParentprofileParentPage,
	StudentprofilePrincipalPage,
	StudentprofileStudentPage,
	ParentprofilePersonalprofilePage,
	PrincipalprofilePrincipalPage,
	PermissionTypeaheadPage,
	MathteacherParentPage,
	MathteacherTeacherPage,
	MathstudentPage,
	SchedulePage,
	Schedule1Page,
	MobilestagePage,
	ListofassignmentsLessonPage,
	AddassigneesPage,
	NewassignmentsPage,
	AddsectionPage,
	LessonPage,
	InvitePage,
	PubliceventPage,
	PrivateeventPage,
	EventdetailsPage,
	EventsPage,
	InboxPage,
	InboxlistPage,
	AddaddressmobPage,
	AddyearsmobPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RestService,
    RestService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
