FROM alpine:3.18.3

WORKDIR /tmp

RUN apk --no-cache add curl
