FROM python

ENV PYTHONUNBUFFERED 1

RUN mkdir /code
WORKDIR /code

ADD requirements.txt /code

RUN pip install --upgrade pip
RUN pip install -r requirements.txt --no-cache-dir

COPY . .
RUN ./manage.py collectstatic --noinput
