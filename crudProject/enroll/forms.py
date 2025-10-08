from .models import user
from django import forms
from django.core import validators

class userForm(forms.ModelForm):
    class Meta:
        model = user
        fields = ['id','name','email','password']
        widgets={
            'name': forms.TimeInput(attrs={'class':'form-control'}),
            'email': forms.EmailInput(attrs={'class':'form-control'}),
            'password':forms.PasswordInput(render_value=True,attrs={'class':'form-control'}),
        }