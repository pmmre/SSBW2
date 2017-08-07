from django.shortcuts import render
from pruebas.models import Category,Page
from pruebas.forms import CategoryForm
from django.shortcuts import render, HttpResponse



def index(request):
    #category_list = Category.objects.order_by('-name')[:5]
    #b=Category.objects.get(name="nueva2")
    #b.delete()
    category_list = Category.objects.order_by('-name')
    #category_list = Category.objects().order_by('-name')
    context = {'categories': category_list}   # Aquí van la las variables para la plantilla

    return render(request,'pruebas/prueba.html', context)

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


def category(request, category_name_slug):

    # Create a context dictionary which we can pass to the template rendering engine.
    context_dict = {}

    try:
        # Can we find a category name slug with the given name?
        # If we can't, the .get() method raises a DoesNotExist exception.
        # So the .get() method returns one model instance or raises an exception.
        category = Category.objects.get(slug=category_name_slug)
        context_dict['category_name'] = category.name

        # Retrieve all of the associated pages.
        # Note that filter returns >= 1 model instance.
        pages = Page.objects.filter(category=category)

        # Adds our results list to the template context under name pages.
        context_dict['pages'] = pages
        # We also add the category object from the database to the context dictionary.
        # We'll use this in the template to verify that the category exists.
        context_dict['category'] = category
    except Category.DoesNotExist:
        # We get here if we didn't find the specified category.
        # Don't do anything - the template displays the "no category" message for us.
        pass

    # Go render the response and return it to the client.
    return render(request, 'pruebas/category.html', context_dict)



def add_category(request):
    # A HTTP POST?
    if request.method == 'POST':
        form = CategoryForm(request.POST)

        # Have we been provided with a valid form?
        if form.is_valid():
            # Save the new category to the database.
            form.save(commit=True)

            # Now call the index() view.
            # The user will be shown the homepage.
            return index(request)
        else:
            # The supplied form contained errors - just print them to the terminal.
            print(form.errors)

    else:
        # If the request was not a POST, display the form to enter details.
        form = CategoryForm()

    # Bad form (or form details), no form supplied...
    # Render the form with error messages (if any).
    return render(request, 'pruebas/add_category.html', {'form': form})
