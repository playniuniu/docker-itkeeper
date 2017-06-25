FROM alpine:latest
MAINTAINER playniuniu@gmail.com

ENV BUILD_DEP gcc python3-dev musl-dev

COPY web/ /opt/web/

RUN apk add --no-cache --update python3 $BUILD_DEP \
    && pip3 install -U pip \
    && pip3 install -r /opt/web/requirments.txt \
    && apk del $BUILD_DEP \
    && rm -rf /var/cache/apk/* \
    && rm -rf /root/.cache/pip/* \
    && sed -i -e 's/127.0.0.1/apibackend/' /opt/web/app/static/assets/js/data.js

EXPOSE 8000
WORKDIR /opt/web/

CMD ["./run.py"]
