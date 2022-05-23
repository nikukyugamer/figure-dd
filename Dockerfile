FROM alpine:3.16.0

WORKDIR /tmp

RUN apk --no-cache add curl
