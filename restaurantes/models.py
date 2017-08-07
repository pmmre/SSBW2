from django.db import models
from mongoengine import *
<<<<<<< HEAD
from django.template.defaultfilters import slugify
=======
>>>>>>> 63101479a5bcbdca4b5cbbc5277f51e7b2d4038a

# Conectarse a la BD
connect('test', host='192.168.127.129', port=27017)


class addr(EmbeddedDocument):
    building = StringField()
    street   = StringField()
    city     = StringField()   # añadido
    zipcode  = IntField()
    coord    = GeoPointField() # OJO, al BD de test estan a revés
                               # [long, lat] en vez de [lat, long]

class likes(EmbeddedDocument):
    grade = StringField(max_length=1)
    score = IntField()
    date  = DateTimeField()

class restaurants(Document):
    name             = StringField(required=True, max_length=80)
<<<<<<< HEAD
    restaurant_id    = StringField()
=======
    restaurant_id    = IntField()
>>>>>>> 63101479a5bcbdca4b5cbbc5277f51e7b2d4038a
    cuisine          = StringField()
    borough          = StringField()
    address          = EmbeddedDocumentField(addr)              # en la misma collección
    grades           = ListField(EmbeddedDocumentField(likes))
<<<<<<< HEAD
    photo            = FileField()
=======
>>>>>>> 63101479a5bcbdca4b5cbbc5277f51e7b2d4038a
