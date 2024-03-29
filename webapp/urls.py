from django.urls import path, include
from django.conf.urls import url
from . import views
from agora.views import Agora
from django.contrib import admin
from django.contrib.auth import views as auth_views



urlpatterns = [
    path('admin/', admin.site.urls),
    path('agora/', Agora.as_view(app_id='77295eb8cbfb49c086f1ff4dd6322cff',  channel='teklrn_conference'), name="agora"),
    path('oauth/', include('social_django.urls', namespace='social')),
    path('activate/<uidb64>/<token>', views.ActivateStudentView.as_view(), name="activate"),    
    path('activateT/<uidb64>/<token>', views.ActivateTrainerView.as_view(), name="activateT"),
    path('contact/', views.contact, name='contact-Page'),
    path('about/', views.about, name='about-Page'),
    path('test/', views.test, name='hi-Test-Page'),
    path('hi/', views.hi, name='hi-Page'),
    path('news/technology/', views.news, name='news-Page'),
    path('info/technology/', views.info, name='info-Page'),
    path('news/technology/read/', views.newsread, name='news-read'),    
    path('technologies/technology/', views.gotToTechnology, name='gotToTechnology-Page'),
    path('technologies/', views.hiPre, name='hi-pre-Page'),
    path('news/', views.newsPre, name='hi-pre-Page'),
    path('careers/', views.careers, name='careers-Page'),
    path('teach/', views.teach, name='teach-Page'),
    path('press/', views.press, name='press-Page'),
    path('business/', views.business, name='business-Page'),
    path('help/', views.help, name='help-Page'),
    path('terms/', views.terms, name='terms-Page'),
    
    path('refund/', views.refund, name='refund-Page'),
    path('privacy/', views.privacy, name='privacy-Page'),
    path('', views.home, name='Home-Page'),
    path('autocomplete/',views.AutoCompleteView.as_view()),
    path('searchtopics/',views.AutoCompleteSearchTopicsView.as_view()),
    path('searchtopicsnew/',views.AutoCompleteSearchTopicsViewNew.as_view()),
    path('searchtopicsnewnews/',views.AutoCompleteSearchTopicsViewNewNews.as_view()),
    path('getTechnologiesMatchingTheSearch/',views.TechnologiesMatchingTheSearchView.as_view()),
    path('getTechnologiesForDesignations/',views.TechnologiesMatchingTheDesignationView.as_view()),
    path('getSupportedDesignations/',views.SupportedDesignationsView.as_view()),
    path('loginFormForVideoAccess/',views.LoginViewForVideoAccess.as_view()),
    path('loginForm/',views.LoginView.as_view()),
    path('loginFormT/',views.LoginTView.as_view()),    
    path('book_course_form/',views.BookCourseFormView.as_view()), 
    path('bookingForm/',views.BookCourseFormView.as_view()),    
    path('checkuser/',views.CheckUserExistsView.as_view()),
    path('logout/',views.logout_view, name='logout'),
    path('logout_t/',views.logout_t_view, name='logout_t'),
    path('register_student',views.RegisterStudentView.as_view()),
    path('registerBack/', views.registerBack, name='registerBack'), 
    path('register/', views.register, name='register'), 
    path('registerT/', views.register_t, name='registerT'), 
    path('userProfile/', views.user_profile, name='user_profile'), 
    path('userProfileT/', views.user_profile_t, name='user_profile_t'), 
    path('uploadCourse/', views.upload_course, name='upload_course'), 
    path('login/', views.login_page, name='login'), 
    path('loginT/', views.login_page_t, name='loginTA'), 
    path('loginA/', views.login_page_a, name='loginA'), 
    path('loginTA/', views.login_page_t_a, name='loginT'), 
    path('accounts/', include('django.contrib.auth.urls')),
    path('back_to_landing_page/',views.LandingBackView.as_view()),
    path('back_to_landing_login_page/',views.LandingBackLoginView.as_view()),
    path('reset_password/',auth_views.PasswordResetView.as_view(template_name='webapp/resetPassword.html'), name='reset_password'),
    path('reset_password_sent/',auth_views.PasswordResetDoneView.as_view(template_name='webapp/passwordResetConfirm.html'), name='password_reset_done'),
    path('reset/<uidb64>/<token>/',auth_views.PasswordResetConfirmView.as_view(template_name='webapp/resetPasswordEnter.html'), name='password_reset_confirm'),
    path('reset_password_complete/', views.RedirectToLandingStudentView, name='password_reset_complete'),
    path('reset_password_t/',views.ResetPasswordTView.as_view()),
    path('login_student',views.LoginStudentView.as_view()),
    path('redirect_to_landing_page/', views.RedirectToLandingStudentView, name='redirectToLandingStudentView'),
    path('reset_student_password',views.ResetStudentPwdView.as_view(), name='reset'),
    path('reset_trainer_password',views.ResetStudentPwdView.as_view()),
    path('book_course',views.BookCourseView.as_view()),
    path('book_video',views.BookVideoView.as_view()),
    path('checkTrainer/',views.CheckTeacherExistsView.as_view()),
    path('register_teacher',views.RegisterTeacherView.as_view()),
    path('login_teacher',views.LoginTeacherView.as_view()),
    path('login_teacher_authorize',views.login_teacher_authorize, name='login_authorize'),
    path('upload_complete',views.upload_complete, name='upload_complete'),
    path('get_pending_course_assignments',views.TeacherPickCourseView.as_view()),
    path('get_associated',views.AssociatedTechView.as_view()),
    path('get_most_sought',views.MostSoughTechView.as_view()),
    path('teacherbooking/',views.TeacherBookCourseView.as_view()),
    path('markCompletion/',views.MarkCourseCompletionView.as_view()),
    path('get_given_trainings/',views.TeacherGivenTrainingsView.as_view()),
    path('get_inprogress_trainings/',views.TeacherInProgressTrainingsView.as_view()),
    path('get_pending_trainings/',views.TeacherPendingTrainingsView.as_view()),
    path('get_pending_student_trainings/',views.PendingStudentTrainingsView.as_view()),
    path('get_inprogress_student_trainings/',views.InprogressStudentTrainingsView.as_view()),
    path('get_completed_student_trainings/',views.CompletedStudentTrainingsView.as_view()),
    path('get_accepted_student_trainings/',views.AcceptedStudentTrainingsView.as_view()),
    path('charge/', views.charge, name='charge'), # new
    path('chargevideo/', views.chargevideo, name='chargeVideo'), # new
]


