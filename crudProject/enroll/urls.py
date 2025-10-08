from django.urls import path,include
from .views import homePage,deleteData,updateData
urlpatterns = [
    path('',homePage,name='home'),
    path('delete/<int:id>',deleteData,name = 'delete'),
    path('<int:id>',updateData,name = 'update'),
    path('api/',include('enroll.api.urls')),
]
