from django.shortcuts import render,redirect
from .models import *
from .forms import RestaurantForm
from django.shortcuts import render, HttpResponse

import datetime
import logging
import os, os.path

def handle_uploaded_file(n, f):
    with open('static/img/restaurants/' + str(n) + '.jpg', 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)

logger = logging.getLogger(__name__)

def index(request):
    logger.info(datetime.datetime.today().strftime('%Y-%m-%d %H:%M:%S') + " - se ha consultado la página de inicio")
    category_list = restaurants.objects.order_by('-name')[:5]
    #ultimosRestaurants = list(reversed(
    #restaurants.objects[len(restaurants.objects) - 25:len(restaurants.objects)]))
    #category_list = {
    #    'resta': ultimosRestaurants,
    #}
    #category_list = Category.objects().order_by('-name')

    context = {'categories': category_list,
    "menu": "index"}   # Aquí van la las variables para la plantilla

    return render(request,'restaurantes/index.html', context)


def index2(request):
    print("hola2")
    logger.info(datetime.datetime.today().strftime('%Y-%m-%d %H:%M:%S') + " - se ha consultado la página de inicio 2")
    category_list = Category.objects.order_by('-name')[:5]

    #category_list = Category.objects().order_by('-name')
    context = {'categories': category_list,
    "menu": "index"}   # Aquí van la las variables para la plantilla

    return render(request,'restaurantes/index.html', context)


def restaurantes(request):
    logger.info(datetime.datetime.today().strftime('%Y-%m-%d %H:%M:%S') + " - se ha consultado la página de restaurantes")
    print(len([name for name in os.listdir('static/img/restaurants/') ]))
    print("numero de elementos")
    print(restaurants.objects.count())
    category_list = restaurants.objects.order_by('name')[140:1000]

    #print(restaurants.objects(restaurant_id='41702705')[0])
    context = {'categories': category_list,
    "menu": "restaurantes"
    }
    #context = {}   # Aquí van la las variables para la plantilla
    return render(request,'restaurantes/restaurantes.html', context)

def restaurante(request,id_rest):

    logger.info(datetime.datetime.today().strftime('%Y-%m-%d %H:%M:%S') + " - se ha consultado la página del resurante "+id_rest)
    print(id_rest)
    r = restaurants.objects.get(restaurant_id=id_rest)
    print("hello")
    print(r.photo)
    print("Adios")
    context_dict = {
        'category': r,
        "photo": str(r.restaurant_id),
        "menu": "restaurante"
    }

    return render(request, 'restaurantes/restaurante.html', context_dict)



def restaurant(request, id):
    logger.info(datetime.datetime.today().strftime('%Y-%m-%d %H:%M:%S') + " - se ha consultado la página del resurante "+id)
    r = restaurants.objects(restaurant_id=id)[0]
    context = {
        "resta": r,
        "photo": str(r.restaurant_id)
    }
    return render(request, 'restaurantes/restaurant.html', context)

def add(request):
    logger.info(datetime.datetime.today().strftime('%Y-%m-%d %H:%M:%S') + " - se ha consultado la página de add restaurante")
    if request.method == "POST":
        form = RestaurantForm(request.POST, request.FILES)
        if form.is_valid():
            if len(request.FILES) != 0:
                handle_uploaded_file(len([name for name in os.listdir('static/img/restaurants/') ]) + 1, request.FILES['photo'])
            r = form.save()
            return render(request, 'restaurantes/index.html')
    else:
        form = RestaurantForm();
    # GET o error
    context = {
        'form': form,
        "menu": "add"
    }
    return render(request, 'restaurantes/add.html', context)


def delete(request):
    logger.info(datetime.datetime.today().strftime('%Y-%m-%d %H:%M:%S') + " - se ha consultado la página de inicio")
    id_rest = request.GET["id"]
    restaurants.objects.filter(restaurant_id=id_rest).delete()
    return render(request, 'restaurantes/restaurantes.html')



#def index(request):
#    return HttpResponse('Hello World!')
