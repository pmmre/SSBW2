from django.conf.urls import url

from . import views

urlpatterns = [
  url(r'^$', views.index, name='index'),
  url(r'^index/$', views.index2, name='index'),
  url(r'^restaurantes/$', views.restaurantes, name='restaurantes'),
  url(r'^restaurante/(?P<id_rest>[0-9]+)/$', views.restaurante, name='restaurante'),
  url(r'^add/$', views.add, name='add'),
  url(r'^delete/$', views.delete, name='delete'),

  #url(r'^test/$', views.test, name='test'),
  #url(r'^index/$', views.index2, name='index'),
  #url(r'^base/$', views.base, name='base'),
  #url(r'^restaurantes/$', views.restaurantes, name='restaurantes'),

]
