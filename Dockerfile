FROM alpine:3.18.2

WORKDIR /tmp

RUN apk --no-cache add curl
