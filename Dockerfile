FROM alpine:3.17.2

WORKDIR /tmp

RUN apk --no-cache add curl
