FROM ubuntu:latest

#Autor
MAINTAINER Pablo Martin-Moreno Ruiz <pmmr1990@gmail.com>

#Actualizar Sistema Base
RUN apt-get -y update

#Descargar aplicacion
RUN apt-get install -y git
RUN git clone https://github.com/pmmre/SSBW2.git


# Instalar Python y PostgreSQL
RUN apt-get install -y python-setuptools
RUN apt-get -y install python-dev
RUN apt-get -y install build-essential
RUN apt-get -y install python-psycopg2
RUN apt-get -y install libpq-dev
RUN easy_install pip
RUN pip install --upgrade pip

#Instalar la app
RUN cd SSBW && pip install -r requirements.txt

#Migraciones
RUN cd SSBW && python manage.py syncdb --noinput
