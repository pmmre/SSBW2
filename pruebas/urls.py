from django.conf.urls import url

from . import views

urlpatterns = [
  url(r'^$', views.index, name='index'),
  url(r'^test/$', views.test, name='test'),
  url(r'^index/$', views.index2, name='index'),
  url(r'^base/$', views.base, name='base'),
  url(r'^restaurantes/$', views.restaurantes, name='restaurantes'),
  url(r'^category/(?P<category_name_slug>[\w\-]+)/$', views.category, name='category'),
  url(r'^add_category/$', views.add_category, name='add_category'),
]
