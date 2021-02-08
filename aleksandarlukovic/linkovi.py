from django.http import HttpResponse
from django.shortcuts import render
from django.contrib import admin

def indexRoot(request):
    return render(request, 'root/index.html')

def opisRoot(request):
    return render(request, 'root/opis.html')

def projektiRoot(request):
    return render(request, 'root/projekti.html')
