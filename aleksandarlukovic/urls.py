"""aleksandarlukovic URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import linkovi
urlpatterns = [
    path('admin/', admin.site.urls),
    #root
    path('', linkovi.indexRoot, name="indexRoot"),
    path('root/aktivnosti', linkovi.aktivnostiRoot, name="aktivnostiRoot"),
    path('root/opis', linkovi.opisRoot, name="opisRoot"),
    #profil
    path('profil/contact', linkovi.contactProfile, name="contactProfile"),
    path('profil/en', linkovi.enProfile, name="enProfile"),
    path('profil/faculty', linkovi.facultyProfile, name="facultyProfile"),
    path('profil/fakultet', linkovi.fakultetProfil, name="fakultetProfil"),
    path('profil/galerija', linkovi.galerijaProfil, name="galerijaProfil"),
    path('profil/galery', linkovi.galeryProfile, name="galeryProfile"),
    path('profil/kontakt', linkovi.kontaktProfil, name="kontaktProfil"),
    path('profil/online_courses', linkovi.onlProfile, name="onlProfile"),
    path('profil/online_kursevi', linkovi.onlProfil, name="onlProfil"),
    path('profil/profil', linkovi.profilProfil, name="profilProfil"),
    path('profil/profile', linkovi.profileProfile, name="profileProfile"),
    path('profil/sr', linkovi.srProfil, name="srProfil"),
    #telekomunikacije
    path('telekomunikacije/beleske', linkovi.beleskeTS, name="beleskeTS"),
    path('telekomunikacije/bezbednost_infromacija', linkovi.biTS, name="biTS"),
    path('telekomunikacije/bezbednost_infromacija2', linkovi.bi2TS, name="bi2TS"),
    path('telekomunikacije/bezicne_mreze', linkovi.bmTS, name="bmTS"),
    path('telekomunikacije/master', linkovi.masterTS, name="masterTS"),
    path('telekomunikacije/osnovne', linkovi.osnovneTS, name="osnovneTS"),
    path('telekomunikacije', linkovi.telekomunikacije, name="telekomunikacije"),
    path('telekomunikacije/tk_sistemi_mas', linkovi.tkmTS, name="tkmTS"),
    #informatika
    path('informatika', linkovi.informatika, name="informatika"),
]
