from django.http import HttpResponse
from django.shortcuts import render
from django.contrib import admin

#root 
def aktivnostiRoot(request):
    return render(request, 'root/aktivnosti.html')

def indexRoot(request):
    return render(request, 'root/index.html')

def opisRoot(request):
    return render(request, 'root/opis.html')

def projektiRoot(request):
    return render(request, 'root/projekti.html')

#profil
def contactProfile(request):
    return render(request, 'profil/contact.html')

def enProfile(request):
    return render(request, 'profil/en.html')

def facultyProfile(request):
    return render(request, 'profil/faculty.html')

def fakultetProfil(request):
    return render(request, 'profil/fakultet.html') 

def galerijaProfil(request):
    return render(request, 'profil/galerija.html')

def galeryProfile(request):
    return render(request, 'profil/galery.html')

def kontaktProfil(request):
    return render(request, 'profil/kontakt.html')

def onlProfile(request):
    return render(request, 'profil/online_courses.html')

def onlProfil(request):
    return render(request, 'profil/online_kursevi.html')

def profilProfil(request):
    return render(request, 'profil/profil.html')

def profileProfile(request):
    return render(request, 'profil/profile.html')

def srProfil(request):
    return render(request, 'profil/sr.html')


#telekomunikacije
def beleskeTS(request):
    return render(request, 'telekomunikacije/beleske.html')

def biTS(request):
    return render(request, 'telekomunikacije/bezbednost_informacija.html')

def bi2TS(request):
    return render(request, 'telekomunikacije/bezbednost_informacija2.html')

def bmTS(request):
    return render(request, 'telekomunikacije/bezicne_mreze.html')

def masterTS(request):
    return render(request, 'telekomunikacije/master.html')

def osnovneTS(request):
    return render(request, 'telekomunikacije/osnovne.html')


def telekomunikacije(request):
    return render(request, 'telekomunikacije/telekomunikacije.html')

def tkmTS(request):
    return render(request, 'telekomunikacije/tk_sistemi_mas.html')

#informatika
def informatika(request):
    return render(request, 'informatika/informatika.html')
