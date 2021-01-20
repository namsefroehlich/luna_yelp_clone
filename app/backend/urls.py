"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views

from restaurants.views import ListTopRestaurantsView

authurls = [
    path('token/', views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', views.TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', views.TokenVerifyView.as_view(), name='token_refresh'),
]


urlpatterns = [
    path('backend/admin/', admin.site.urls),
    path('backend/api/auth/', include(authurls)),
    path('backend/api/users/', include('users.urls')),
    path('backend/api/registration/', include('registrations.urls')),
    path('backend/api/interests/', include('interests.urls')),
    path('backend/api/restaurants/', include('restaurants.urls')),
    path('backend/api/reviews/', include('reviews.urls')),
    path('backend/api/review/comment/', include('comments.urls')),
    path('backend/api/categories/', include('categories.urls')),
    path('backend/api/home/', ListTopRestaurantsView.as_view()),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
