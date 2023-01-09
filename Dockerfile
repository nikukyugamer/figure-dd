FROM alpine:3.17.1

WORKDIR /tmp

RUN apk --no-cache add curl
