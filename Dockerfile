FROM alpine:3.21.0

WORKDIR /tmp

RUN apk --no-cache add curl
