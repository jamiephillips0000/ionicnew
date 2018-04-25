import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ApplicationsregisterPage } from '../pages/applicationsregister/applicationsregister';
import { QuickactionPage } from '../pages/quickactions/quickaction';
import { QuickactionPrincipalPage } from '../pages/quickaction-principal/quickaction-principal';
import { QuickactionBookPage } from '../pages/quickaction-book/quickaction-book';
import { TempteacherapplyPage } from '../pages/tempteacherapply/tempteacherapply';
import { Tempteacherapply1Page } from '../pages/tempteacherapply/tempteacherapply1/tempteacherapply1';
import { Absentteachers1Page } from '../pages/tempteacherapply/absentteachers1/absentteachers1';
import { AddstudentinfoPage } from '../pages/addstudentinfo/addstudentinfo';
import { InvitationtoregisterPage } from '../pages/invitationtoregister/invitationtoregister';
import { AddteacherinfoPage } from '../pages/addteacherinfo/addteacherinfo';
import { InboxPage } from '../pages/inbox/inbox';

import { ListofactiveschoolPage } from '../pages/school-management/listofactiveschool/listofactiveschool';
import { ListofequipmentsPage } from '../pages/school-management/listofequipments/listofequipments';
import { EquipmentshedulePage } from '../pages/school-management/equipmentshedule/equipmentshedule';
import { HolydaysPage } from '../pages/school-management/holydays/holydays';
import { AddyearsPage } from '../pages/school-management/addyears/addyears';
import { AddroomPage } from '../pages/school-management/addroom/addroom';
import { ClassshedulePage } from '../pages/school-management/classshedule/classshedule';
import { MobilestagePage } from '../pages/school-management/mobilestage/mobilestage';

import { ListofactivecurriculumPage } from '../pages/curriculums/listofactivecurriculum/listofactivecurriculum';
import { AddsubsectionPage } from '../pages/curriculums/addsubsection/addsubsection';

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

import { AddschoolPage } from '../pages/school-management/addschool/addschool';
import { DisablealertTeacherPage } from '../pages/dashboard-teacher/disablealert-teacher/disablealert-teacher';
import { AddaddressPage } from '../pages/school-management/addaddress/addaddress';
import { AddincidentPage } from '../pages/dashboard-teacher/addincident/addincident';

import { SchedulePage } from '../pages/curriculums/schedule/schedule';
import { Schedule1Page } from '../pages/curriculums/schedule1/schedule1';

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

import { Events } from 'ionic-angular';
import { RestService } from '../services/rest/restservice';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;


  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public events: Events, public restService : RestService) {
    this.initializeApp();

    if (restService.hasValidToken()) {
      this.rootPage = HomePage;
    } else {
      // this.rootPage = LoginPage;
      this.rootPage = HomePage;
    }


    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
//	  { title: 'LogIn', component: LoginPage },
//    { title: 'InvitationToRegisterPage', component: InvitationtoregisterPage },
//	  { title: 'Application Register', component: ApplicationsregisterPage },
	  { title: 'Quick Actions', component: QuickactionPage },
//	  { title: 'Quick Actions For principal', component: QuickactionPrincipalPage },
//	  { title: 'Quick Actions (book equipment)', component: QuickactionBookPage },
	  { title: 'Temp Teacher Apply', component: TempteacherapplyPage },
	  { title: 'Temp Teacher Apply1', component: Tempteacherapply1Page },
	  { title: 'Absent teacher 1', component: Absentteachers1Page },
	  { title: 'List of active school', component: ListofactiveschoolPage },
	  { title: 'List of Equipments', component: ListofequipmentsPage },
	  { title: 'Equipments Shedule', component: EquipmentshedulePage },
	  { title: 'School management holydays', component: HolydaysPage },
	  { title: 'School management Addyears', component: AddyearsPage },
	  { title: 'School management Addroom', component: AddroomPage },
	  { title: 'School management ClassShedule', component: ClassshedulePage },
	  { title: 'School management Mobile Stage', component: MobilestagePage },
	  { title: 'List of active curriculums', component: ListofactivecurriculumPage },
	  { title: 'Curriculum Schedule', component: SchedulePage },
	  { title: 'Curriculum Schedule1', component: Schedule1Page },
	  { title: 'Dashboard-board', component: DashboardBoardPage },
	  { title: 'Dashboard-Parent listof Assignments', component: ListofassignmentsPage },
	  { title: 'Dashboard-student listof Assignments', component: ListofassignmentsStudentPage },
	  { title: 'Dashboard-Parent Add student address', component: AddstudentaddressPage },
	  { title: 'Dashboard-Parent Parent address', component: ParentaddressPage },
	  { title: 'Dashboard-Parent Activities', component: ActivitiesparentPage },
	  { title: 'Dashboard-Parent Student Edit mode', component: StudenteditmodePage },
	  { title: 'Dashboard-Parent Student profile', component: StudentprofileParentPage },
	  { title: 'Dashboard-Parent Parent profile', component: ParentprofileParentPage },
	  { title: 'Dashboard-Parent Teacher Profile', component: TeacherprofilePage },
	  { title: 'Dashboard-Parent Permission Typeahead', component: PermissionTypeaheadPage },
	  { title: 'Dashboard-Parent Math(teacher)', component: MathteacherParentPage },
	  { title: 'Dashboard-Principal list of Teachers', component: ListofteachersPrincipalPage },
	  { title: 'Dashboard-Principal Year(principal)', component: YearprincipalPage },
	  { title: 'Dashboard-Principal UserProfile', component: PrincipalUserprofilePage },
	  { title: 'Dashboard-Principal Student profile', component: StudentprofilePrincipalPage },
	  { title: 'Dashboard-Principal principal profile', component: PrincipalprofilePrincipalPage },
	  { title: 'Personal-Profile principal', component: PersonalprofilePrincipalPage },
	  { title: 'Personal-Profile Teacher', component: PersonalprofileTeacherPage },
	  { title: 'Personal-Profile stu view mode', component: PersonalprofileStudentviewmodePage },
	  { title: 'Personal-Profile Parent profile', component: ParentprofilePersonalprofilePage },
	  { title: 'Dashboard-student stu view mode', component: StudentviewmodePage },
	  { title: 'Dashboard-student Student profile', component: StudentprofileStudentPage },
	  { title: 'Dashboard-student Math(student)', component: MathstudentPage },
	  { title: 'Dashboard-teacher userprofile', component: TeacherUserprofilePage },
	  { title: 'Dashboard-teacher Activities', component: ActivitiesteacherPage },
	  { title: 'Dashboard-teacher teacherProfile', component: TeacherprofileTeacherPage },
	  { title: 'Dashboard-teacher listof assignments', component: ListofassignmentsTeacherPage },
	  { title: 'Dashboard-teacher Disable Alert teacher', component: DisablealertTeacherPage },
	  { title: 'Dashboard-teacher Add Incident', component: AddincidentPage },
	  { title: 'Dashboard-teacher Add Alert(teacher)', component: AddalertTeacherPage },
	  { title: 'Dashboard-teacher Student profile', component: StudentprofileTeacherPage },
	  { title: 'Dashboard-teacher Math(teacher)', component: MathteacherTeacherPage },
	  { title: 'Lesson and assignments list of assignments', component: ListofassignmentsLessonPage },
	  { title: 'Lesson and assignments Add Assignees', component: AddassigneesPage },
	  { title: 'Lesson and assignments NewAssignments', component: NewassignmentsPage },
	  { title: 'Lesson and assignments AddSection', component: AddsectionPage },
	  { title: 'Lesson and assignments Lesson', component: LessonPage },
	  { title: 'Event Management Invite', component: InvitePage },
	  { title: 'Event Management PublicEvent', component: PubliceventPage },
	  { title: 'Event Management PrivateEvent', component: PrivateeventPage },
	  { title: 'Event Management EventDetails', component: EventdetailsPage },
	  { title: 'Event Management Events', component: EventsPage },
	  { title: 'Inbox', component: InboxPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();




    });
  }
  openPageUsingName(name) {
    for(let i=0; i<this.pages.length; i++){
      if(this.pages[i].title == name){
        this.nav.push(this.pages[i].component);
        break;
      }
    }
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
	//alert(page.component);
	//this.rootPage = page.component;
  }
}
