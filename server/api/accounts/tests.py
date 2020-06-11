from django.test import TestCase
from . import models
from django.contrib.auth import get_user_model
from api.schema import schema
from api.testcase import MyTestCase
from django.core.exceptions import ValidationError

User = get_user_model()


class AuthTestCase(MyTestCase):

    def setUp(self):
        self.user = User.objects.create_user(
            username='teste',
            password='fafa3459'
        )
        self.user.save()

    def login(self):
        executed = self.client.execute('''
            mutation {
                tokenAuth(username: "teste", password: "fafa3459") {
                    token
                    payload
                }
            }
        ''')
        assert 'data' in executed
        assert not 'errors' in executed
        assert 'token' in executed['data']