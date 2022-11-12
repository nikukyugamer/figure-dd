FROM alpine:3.16.3

WORKDIR /tmp

RUN apk --no-cache add curl
