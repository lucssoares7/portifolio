from django.shortcuts import render
from .models import Paciente
import time
import timeit
from datetime import date, datetime
from django.http import JsonResponse

# Create your views here.
def home(request):
    return render(request,'pacientes/home.html')
        
def pacientes(request):
    novo_paciente = Paciente()
    novo_paciente.nome = request.POST.get('nome')
    data_str = request.POST.get('datanasc')
    formato_data = "%Y-%m-%d"  # Exemplo: "2023-06-26"
    #return JsonResponse({'data nascimento':data_str})
    try:
        data_nascimento = datetime.strptime(data_str, formato_data).date()
        data_atual = date.today()
        idade = data_atual.year - data_nascimento.year
        if data_atual.month < data_nascimento.month or (data_atual.month == data_nascimento.month and data_atual.day < data_nascimento.day):
            idade - idade - 1
    except ValueError:
        return JsonResponse({'mensagem': 'Formato de data inválido.'})
    novo_paciente.idade = idade
    novo_paciente.save()

    pacientes={
        'pacientes':Paciente.objects.all()
    }
    return render(request,'pacientes/listagem.html',pacientes)


    