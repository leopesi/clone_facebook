from django.db import models
from django.contrib.auth.models import AbstractUser, Group
from django.utils.translation import gettext as _


class GroupModel(models.Model):
    name = models.CharField(blank=True, max_length=128)
    admin = models.ManyToManyField('UserModel')
    registration_date = models.DateTimeField(auto_now=True)


class UserModel(AbstractUser):
    avatar = models.ImageField(upload_to='avatars', blank=True)
    birth = models.DateField(blank=True, null=True)
    city = models.CharField(blank=True, max_length=128)
    meritial_state = models.CharField(blank=True, max_length=128,
                                    choices=[('1', 'married'),
                                             ('2', 'in relationship'),
                                             ('3', 'single')])
    groups = models.ManyToManyField(GroupModel)

    class Meta(AbstractUser.Meta):
        swappable = 'AUTH_USER_MODEL'
        abstract = False
        verbose_name = _('User')
        verbose_name_plural = _('Users')


class FriendRequest(models.Model):
    user = models.ForeignKey(
        UserModel, 
        on_delete=models.CASCADE,
        related_name="friends"
    )
    accepted = models.BooleanField(default=False)
    registration_date = models.DateTimeField(auto_now=True)


class PostModel(models.Model):
    user = models.ForeignKey(UserModel, on_delete=models.CASCADE, related_name="posts")
    text = models.CharField(blank=True, max_length=256)
    image = models.ImageField(upload_to='image', blank=True)
    registration_date = models.DateTimeField(auto_now_add=True)
