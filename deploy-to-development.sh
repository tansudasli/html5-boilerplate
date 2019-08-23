#!/usr/bin/env bash

# -m "message for deployment"
npm run build && firebase deploy --project development --only hosting:www
