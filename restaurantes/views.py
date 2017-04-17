from django.shortcuts import render
from .models import addr, restaurants

# Create your views here.

from django.shortcuts import render, HttpResponse

#from .forms import restaurantes

# Create your views here.



def index(request):
    category_list = restaurants.objects.order_by('-name')[:5]
    #ultimosRestaurants = list(reversed(
    #restaurants.objects[len(restaurants.objects) - 25:len(restaurants.objects)]))
    #category_list = {
    #    'resta': ultimosRestaurants,
    #}
    #category_list = Category.objects().order_by('-name')
    context = {'categories': category_list}   # Aquí van la las variables para la plantilla

    return render(request,'index.html', context)

def test(request):
    context = {}   # Aquí van la las variables para la plantilla
    return render(request,'test.html', context)

def index2(request):
    category_list = Category.objects.order_by('-name')[:5]

    #category_list = Category.objects().order_by('-name')
    context = {'categories': category_list}   # Aquí van la las variables para la plantilla

    return render(request,'index.html', context)


def base(request):
    context = {}   # Aquí van la las variables para la plantilla
    return render(request,'base.html', context)


def restaurantes(request):
    context = {}   # Aquí van la las variables para la plantilla
    return render(request,'restaurantes.html', context)


#def index(request):
#    return HttpResponse('Hello World!')
