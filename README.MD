# AOWP Hospitality Reference Application Angular Frontend

## Prerequisites

### Run CouchDB
1. Download [Boot2Docker](http://boot2docker.io/)
2. Run Boot2Docker
3. Clone the AOWP Docker Containers Repo
4. Follow the instructions to run the [CouchDB AOWP Docker Container](https://innersource.accenture.com/aowp/docker-containers/) using the Boot2Docker terminal.

### Run AOWP Hospitality Reference Application Backend
1. Clone the [AOWP Hospitality Reference Application Backend](https://innersource.accenture.com/aowp/aowp-hospitality-ref-app-backend/)
2. Follow [these instructions](https://innersource.accenture.com/aowp-new-joiner/aowp-hospitality-ref-app-backend) to run the backend code.

### Run AOWP Hospitality Reference Application Angular Frontend
1. Clone the [AOWP Hospitality Reference Application Angular Frontend](https://innersource.accenture.com/aowp/aowp-hospitality-ref-app-angular-frontend/)
2. `cd` into the `aowp-hospitality-ref-app-angular-frontend`
3. run `bower install` & choose the most recent version of AngularJS to install (version 1.4)
4. `cd` into the /app/scripts folder and run `sudo npm install`
5. cd back to `aowp-hospitality-ref-app-angular-frontend` and run `grunt serve`
6. Web page will automatically launch in your default browser.