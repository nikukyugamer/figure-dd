FROM alpine:3.20.1

WORKDIR /tmp

RUN apk --no-cache add curl
