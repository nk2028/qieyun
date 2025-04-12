#!/usr/bin/env bash

here="$(which ${BASH_SOURCE[0]} | xargs readlink -f | xargs dirname)"

exec python -m http.server -d "$here"/site -b 127.0.0.1 "$@"
