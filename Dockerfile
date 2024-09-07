FROM alpine:3.20.3

WORKDIR /tmp

RUN apk --no-cache add curl
