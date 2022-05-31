from django.urls import path
from .views import PostList, PostDetail

# from rest_framework import routers


app_name="blog_api"


# use the config below when using viewsets instead of views
# router = routers.DefaultRouter()
# router.register(r'users', views.UserViewSet)

# using class based views gives us more control hence we can explicitly
# define the URL Conf


urlpatterns = [
    path('<int:pk>', PostDetail.as_view(), name="detailcreate"),
    path('', PostList.as_view(), name="listcreate"),
]
