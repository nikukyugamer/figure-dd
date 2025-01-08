FROM alpine:3.21.2

WORKDIR /tmp

RUN apk --no-cache add curl
