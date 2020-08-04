#!/usr/bin/env bash

gcloud config set account tim.r.coulson@gmail.com
gcloud config set project sidd-266210
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
WEBSITE=www.bignumbers.io
gatsby build
gsutil mb gs://${WEBSITE}
gsutil iam ch allUsers:objectViewer gs://${WEBSITE}
gsutil cp -m -r ${DIR}/public/* gs://${WEBSITE}
gsutil web set -m index.html -e 404.html gs://${WEBSITE}
