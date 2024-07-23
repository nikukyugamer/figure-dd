FROM alpine:3.20.2

WORKDIR /tmp

RUN apk --no-cache add curl
