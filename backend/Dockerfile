FROM python

RUN mkdir -p /usr/src/app

ENV PYTHONUNBUFFERED=1

WORKDIR /usr/src/app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

RUN chmod +x start.sh

EXPOSE 8000

CMD [ "python3", "manage.py", "runserver" ]
