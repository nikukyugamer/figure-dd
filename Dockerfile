FROM alpine:3.15.3

WORKDIR /tmp

RUN apk --no-cache add curl
