FROM alpine:3.20.0

WORKDIR /tmp

RUN apk --no-cache add curl
