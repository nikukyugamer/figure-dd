FROM alpine:3.15.4

WORKDIR /tmp

RUN apk --no-cache add curl
