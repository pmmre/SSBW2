from django.db import models
from mongoengine import *
from django.template.defaultfilters import slugify
import os, os.path

# Conectarse a la BD
#connect('test', host='192.168.127.133', port=27017)
connect('test', host='127.0.0.1', port=27017)


class addr(EmbeddedDocument):
    building = StringField()
    street   = StringField()
    city     = StringField()   # anaadido
    zipcode  = IntField()
    coord    = GeoPointField() # OJO, al BD de test estan a reves
                               # [long, lat] en vez de [lat, long]

class likes(EmbeddedDocument):
    grade = StringField(max_length=1)
    score = IntField()
    date  = DateTimeField()

class restaurants(Document):
    name             = StringField(required=True, max_length=80)
    restaurant_id    = StringField()
    #restaurant_id    = IntField()
    cuisine          = StringField()
    borough          = StringField()
    address          = EmbeddedDocumentField(addr)              # en la misma colleccion
    grades           = ListField(EmbeddedDocumentField(likes))
    photo            = StringField()                                 #ImageField()
