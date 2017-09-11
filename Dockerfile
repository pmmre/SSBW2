FROM ubuntu:latest

#Autor
MAINTAINER Pablo Martin-Moreno Ruiz <pmmr1990@gmail.com>

#Actualizar Sistema Base
RUN apt-get -y update

#Descargar aplicacion
RUN sudo apt-get install -y git
RUN sudo git clone https://github.com/pmmre/SSBW2.git


# Instalar Python y PostgreSQL
RUN sudo apt-get install -y python-setuptools
RUN sudo apt-get -y install python-dev
RUN sudo apt-get -y install build-essential
RUN sudo apt-get -y install python-psycopg2
RUN sudo apt-get -y install libpq-dev
RUN sudo easy_install pip
RUN sudo pip install --upgrade pip

#Instalar la app
RUN cd SSBW2 && pip install -r requirements.txt

#Migraciones
RUN cd SSBW2 && python manage.py syncdb --noinput
