FROM alpine:3.16.2

WORKDIR /tmp

RUN apk --no-cache add curl
