FROM alpine:3.16.1

WORKDIR /tmp

RUN apk --no-cache add curl
