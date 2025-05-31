FROM alpine:3.22.0

WORKDIR /tmp

RUN apk --no-cache add curl
