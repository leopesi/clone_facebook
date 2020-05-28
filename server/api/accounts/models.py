from django.db import models
from django.contrib.auth.models import User

class GroupModel(models.Model):
    name: models.CharField(blank=True, max_length=128)
    admin: models.ManyToManyField(User, on_delete=models.SET_NULL, null=True)
    registration_date = models.DateTimeField(auto_now_add=True)

class UserModel(models.Model):
    username = models.CharField(blank=True, max_length=128)
    first_name = models.CharField(blank=True, max_length=128)
    last_name = models.CharField(blank=True, max_length=128)
    avatar = models.ImageField(upload_to='avatars', blank=True)
    birth = models.DateField(blank=True, default='1990-01-01')
    city = models.CharField(blank=True, max_length=128)
    choice = models.CharField(blank=True, max_length=128,
                                    choices=[('1', 'married'),
                                             ('2', 'in relationship'),
                                             ('3', 'single')])
    meritial_state = models.ManyToManyField('self', blank=True, related_name='choice')
    friends = models.ManyToManyField(User, on_delete=models.SET_NULL, null=True)
    groups = models.ManyToManyField(GroupModel, on_delete=models.SET_NULL, null=True)

class PostModel(models.Model):
    username = models.ManyToManyField(User, on_delete=models.SET_NULL, null=True)
    text = models.CharField(blank=True, max_length=256)
    image = models.ImageField(upload_to='image', blank=True)
    registration_date = models.DateTimeField(auto_now_add=True)

