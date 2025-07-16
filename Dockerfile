FROM alpine:3.22.1

WORKDIR /tmp

RUN apk --no-cache add curl
