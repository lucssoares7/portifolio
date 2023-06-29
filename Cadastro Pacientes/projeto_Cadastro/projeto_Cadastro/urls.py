from django.urls import path
from app_Cadastro import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
urlpatterns = [
    #rota, view responsável e nome de referência
    path('',views.home,name='home'),
    path('pacientes',views.pacientes,name='dados_paciente')
]

urlpatterns += staticfiles_urlpatterns()