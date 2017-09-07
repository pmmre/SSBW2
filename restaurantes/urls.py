from django.conf.urls import url,include
from rest_framework_mongoengine import routers

from . import views
from . import serializers

# this is DRF router for REST API viewsets
router = routers.DefaultRouter()

# register REST API endpoints with DRF router
router.register(r'restaurants', serializers.restaurantsViewSet, r"restaurants")

urlpatterns = [
  url(r'^$', views.index, name='index'),
  url(r'^index/$', views.index2, name='index'),
  url(r'^restaurantes/$', views.restaurantes, name="restaurantes"),
  url(r'^restaurante/(?P<id_rest>[0-9]+)/$', views.restaurante, name='restaurante'),
  url(r'^add/$', views.add, name='add'),
  url(r'^delete/$', views.delete, name='delete'),
  url(r'^api/', include(router.urls, namespace='api')),
  url(r'^number/$', views.number_of_restaurants, name='number_of_restaurants'),
  url(r'^latlong/$', views.latitud_longitud, name='latitud_longitud'),



  #url(r'^test/$', views.test, name='test'),
  #url(r'^index/$', views.index2, name='index'),
  #url(r'^base/$', views.base, name='base'),
  #url(r'^restaurantes/$', views.restaurantes, name='restaurantes'),

]
