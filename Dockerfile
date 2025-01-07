FROM alpine:3.21.1

WORKDIR /tmp

RUN apk --no-cache add curl
