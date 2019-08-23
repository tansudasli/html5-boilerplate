#!/usr/bin/env bash

npm run build && firebase deploy --project release --only hosting:www
