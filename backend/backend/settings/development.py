from .base import *

DEBUG = os.getenv('DEBUG', 'True') == 'True'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv('POSTGRES_DB'),
        'USER': os.getenv('POSTGRES_USER'),
        'PASSWORD': os.getenv('POSTGRES_PASSWORD'),
        'HOST': os.getenv('POSTGRES_HOST', 'db'),
        'PORT': os.getenv('POSTGRES_PORT', '5432'),
    }
}

STATIC_URL = 'static/'
STATIC_ROOT = 'static'

MEDIA_URL = 'media/'
MEDIA_ROOT = 'media'
