FROM alpine:3.15.2

WORKDIR /tmp

RUN apk --no-cache add curl
