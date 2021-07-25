from django.urls import path
from . import views

urlpatterns = [
    # Vanilla Django Routes
    # path("", views.index, name="index"),
    # path("login", views.login_view, name="login"),
    # path("logout", views.logout_view, name="logout"),

    # API Routes
    path('api/v1/company/<int:company_id>', views.get_update_company, name='get_or_update_individual_company'),
    path('api/v1/company', views.get_post_company, name='get_all_companies_or_add_new_company'),
]