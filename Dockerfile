FROM alpine:3.21.3

WORKDIR /tmp

RUN apk --no-cache add curl
