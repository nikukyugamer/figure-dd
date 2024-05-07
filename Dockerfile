FROM alpine:3.19.1

WORKDIR /tmp

RUN apk --no-cache add curl
