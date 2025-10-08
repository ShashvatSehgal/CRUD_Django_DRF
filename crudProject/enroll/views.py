from django.shortcuts import render,redirect
from .forms import userForm
from .models import user
# Create your views here.
def homePage(request):
    if request.method == "POST":
        fm = userForm(request.POST)
        if fm.is_valid:
            fm.save()
            return redirect('home')
    else:
        fm = userForm()
    users = user.objects.all()
    return render(request,'enroll/addAndShow.html',{'form':fm,'ur':users})

def deleteData(request,id):
    if request.method == 'GET':
        print("view tak aya code")
        pi = user.objects.get(pk=id)
        pi.delete()
        return redirect('home')   

def updateData(request,id):
    print("id is --------> ", id)
    if request.method == "POST":
        print("submit hone pai post request")
        pi = user.objects.get(pk=id)
        fm = userForm(request.POST,instance=pi)
        if fm.is_valid():
            fm.save()
        return redirect('home')    
    else:
        pi = user.objects.get(pk=id)
        fm = userForm(instance=pi)
    return render(request,'enroll/updateStudent.html',{'form':fm})    