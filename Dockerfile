FROM alpine:3.17.0

WORKDIR /tmp

RUN apk --no-cache add curl
