import os
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/
# Get Django environment set by docker (i.e either development or production), or else set it to local
try:
    DJANGO_ENV = os.environ.get("DJANGO_ENV")
except:
    DJANGO_ENV = 'local'

try:
    SECRET_KEY = os.environ.get("SECRET_KEY")
except:
    SECRET_KEY = 'localsecret'

if DJANGO_ENV == 'development' or DJANGO_ENV == 'production':

    print('Environmental variable detected, using dev/prod settings')

    # If Django environement has been set by docker it would be either development or production otherwise it would be undefined or local

    try:
        DEBUG = int(os.environ.get("DEBUG", default=0))
    except:
        DEBUG = False

    try:
        ALLOWED_HOSTS = os.environ.get("DJANGO_ALLOWED_HOSTS").split(" ")
    except:
        ALLOWED_HOSTS = ['127.0.0.1', '0.0.0.0', 'localhost']

    # https://docs.djangoproject.com/en/3.1/ref/settings/#databases
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql_psycopg2',
            'NAME': os.environ.get('DB_DATABSE'),
            'USER': os.environ.get('DB_USER'),
            'PASSWORD': os.environ.get('DB_PASSWORD'),
            'HOST': os.environ.get('DB_HOST'),
            'PORT': os.environ.get('DB_PORT'),
        }
    }
    
elif DJANGO_ENV == 'continuous-integration':

    print('Environmental variable detected, using ci/cd settings')
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql_psycopg2',
            'NAME': 'db.postgresql',
            'USER': 'jacobdavidgrisham',
            'PASSWORD': os.environ.get('DB_PASSWORD'),
            'HOST': 'localhost',
            'PORT': 5432,
        }
    }

else:

    print('No environmental variables found, using default settings')
    DEBUG = True
    ALLOWED_HOSTS = ['127.0.0.1', '0.0.0.0', 'localhost']
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql_psycopg2',
            'NAME': 'predictiondb',
            'USER': 'postgres_user',
            'PASSWORD': 'postgres_password',
            'HOST': '127.0.0.1',
            'PORT': '5432',
        }
    }

# SECURITY WARNING: don't run with CORS turned off (off = True) in production!
CORS_ORIGIN_ALLOW_ALL = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.1/howto/static-files/
# define where the static files are collected in the production build when the command 'python manage.py collectstatic --noinput' is run from the 'entrypoint.sh' file, otherwise this command would not run
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATIC_URL = '/static/'