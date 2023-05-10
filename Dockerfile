FROM alpine:3.18.0

WORKDIR /tmp

RUN apk --no-cache add curl
