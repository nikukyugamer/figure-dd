FROM alpine:3.17.3

WORKDIR /tmp

RUN apk --no-cache add curl
