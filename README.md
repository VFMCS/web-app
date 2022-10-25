# Virtual Farmers Market
## About the Project
The Virtual Farmers Market is a Web Application to allow farmers to post fresh produce they have recently harvested to be purchased by consumers online. We hope that this product gives consumers a platform to purchase directly from farmers, as opposed to having to purchase from a large-chain grocery store. With this in mind, we anticipate that this will allow our customers to get better quality produce that is in season, build relationships with local farmers, and get a better picture of where and how their food is produced. 

For this project, our frontend is coded in ReactJS, our backend is coded in NodeJS, our database has been made using PostgreSQL, and our server is hosted on Google Cloud Platform. 

## Installation
Our frontend is dependent upon ReactJS and its libraries. Therefore, you will need to install npm and run the following commands once you have cloned the repository and navigated to the web-app. Our backend is dependent upon NodeJS and some of its libraries. [Click this link](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for more information on how to install npm. Once you have npm installed, go to the web-app directory and run the following command:

### `npm install`

Once all dependencies are installed, run the following command to start both the server and front end locally:

### `npm start`

We use [concurrently](https://www.npmjs.com/package/concurrently) to build and run both the client and the server using a single command (`npm start`).
For more information about the commands that run under the hood, check out the `package.json` file under `scripts`.

More information about how to run the frontend application locally (and without the server) can be found in the README in the vfm-react-app directory. 

All dependencies necessary for running this application can be found within the `package.json` file.

Our server is hosted on Google Cloud Platform and is available at [vfmcs.com](https://vfmcs.com/)

## Bug Tracking
Bug tracking will be done with the Github Issues section of this repository. There are both Bug Templates and Feature Templates for our developers to document bugs and features requests as they are necessary.

## Database Access
### Access Database from Local psql Client with Cloud SQL Proxy (recommended)
This method requires the google account being used to access the database, be given permissions ahead of time.
- Our database is built with PostgreSQL. Install PostgreSQL from [here](https://www.postgresql.org/download/). Take note of the installation location and add the \bin folder to your PATH.
- Next download Cloud SQL Auth Proxy from [here](https://cloud.google.com/sql/docs/postgres/connect-instance-auth-proxy#install-proxy). Be sure the file is executable and renamed to cloud_sql_proxy.
- Next download and run the Google Cloud CLI Installer from [here](https://cloud.google.com/sdk/docs/install-sdk#installing_the_latest_version). You do not need to make any changes to the default installation. After the installions finishes, make sure that you leave the options to start the shell and run `gcloud init` selected. If nothing happens after the installation completes, open a terminal and run `gcloud init` to set your google account configuration. This is the account that must have permissions to access the database.
- Follow the prompts and sign into your google account. You may be prompted to select a project. The window can be closed at this point.
- Navigate to the directory where cloud_sql_proxy.exe is saved. For linux environments run: `./cloud_sql_proxy -instances=radiant-saga-366418:us-central1:vfmcs-db=tcp:5432`.
On Windows run: `.\cloud_sql_proxy.exe -instances=radiant-saga-366418:us-central1:vfmcs-db=tcp:5432`
Note: ensure that port 5432 is not in use. If it is, it should be changed to an available port.
- Open another terminal and run (change port if necassary): `psql "host=127.0.0.1 port=5432 sslmode=disable dbname=vfmcs1 user=guest"`
- Guest credentials are user=**guest** pass=**guestpass**.
- Enter password when prompted.

You should now be connected and able to query the database. 
An example query:

- `SELECT username FROM users WHERE is_vendor = true;`

This returns users that are vendors.

### Access Database with Google Cloud Console
This method is for developers with access to the Cloud Console.
- Login to Google Cloud console with vfmcs2022@gmail.com credentials. 
- Open Cloud Shell by clicking the icon at the top right.
- run: `gcloud sql connect vfmcs-db --database=vfmcs1 --user=guest`
- You may encounter a popup in which case select authorize
- Enter guestpass


### Access Database from Local psql Client without Cloud SQL Proxy
Our database is built with PostgreSQL. PostgreSQL can be installed [here](https://www.postgresql.org/download/). Once installed, run the command:
- `psql "sslmode=disable dbname=vfmcs1 user=guest hostaddr=34.134.101.113"`
(Please note that currently your address or network must be whitelisted before being able to connect.)

Enter '**guestpass**' when prompted for the password. You should now be connected and able to query the database.



