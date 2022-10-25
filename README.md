# Virtual Farmers Market
## About the Project
The Virtual Farmers Market is a Web Application to allow farmers to post fresh produce they have recently harvested to be purchased by consumers online. We hope that this product gives consumers a platform to purchase directly from farmers, as opposed to having to purchase from a large-chain grocery store. With this in mind, we anticipate that this will allow our customers to get better quality produce that is in season, build relationships with local farmers, and get a better picture of where and how their food is produced. 

For this project, our frontend is coded in ReactJS, our backend is coded in NodeJS, our database has been made using PostgreSQL, and our server is hosted on Google Cloud Platform. 

## Installation
Our frontend is dependent upon ReactJS and its libraries. Therefore, you will need to install npm and run the following commands once you have cloned the repository and navigated to the vfm-react-app directory. [Click this link](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for more information on how to install npm. Once you have npm installed, go to the vfm-react-app directory and run the following commands:

- `npm install react --save`
- `npm install react-router-dom --save`
- `npm install react-scripts --save`

More information about how to run the frontend application once you have installed the necessary libraries can be found in the README on the vfm-react-app directory.

Our backend is dependent upon NodeJS and some of its libraries. You will therefore need to run the following commands assuming you have npm installed.

- `npm install dotenv --save`
- `npm install ejs --save`
- `npm install express --save`
- `npm install nodemon --save`

Our server is hosted on Google Cloud Platform and is available at vfmcs.com

## Bug Tracking
Bug tracking will be done with the Github Issues section of this repository. There are both Bug Templates and Feature Templates for our developers to document bugs and features requests as they are necessary.

## Database Access
### Access Database with Google Cloud Console
- Login to Google Cloud console with vfmcs2022@gmail.com credentials. 
- Open Cloud Shell by clicking the icon at the top right.
- run: `gcloud sql connect vfmcs-db --database=vfmcs1 --user=[USER]`
- You may encounter a popup in which case select authorize
- Enter password

### Access Database from Local psql Client with Google Auth Proxy (reccomended)
- Our database is built with PostgreSQL. Install PostgreSQL from here[here](https://www.postgresql.org/download/)
- Next install Cloud SQL Auth Proxy from [here](https://cloud.google.com/sql/docs/postgres/connect-instance-auth-proxy#install-proxy). Be sure the file is executable and renamd to cloud_sql_proxy.
- For linux environments run: `./cloud_sql_proxy -instances=radiant-saga-366418:us-central1:vfmcs-db=tcp:5432`
- In Powershell on Windows run: `.\cloud_sql_proxy.exe -instances=radiant-saga-366418:us-central1:vfmcs-db=tcp:5432`
- Note: ensure that port 5432 is not in use. If it is it should be changed to an available port
- Open another terminal and run (change port if necassary): `psql "host=127.0.0.1 port=5432 sslmode=disable dbname=vfmcs1 user=[user]"`
- Guest crendentials are user=**guest** pass=**guestpass**
- Enter password when prompted


### Access Database from Local psql Client without Google Auth Proxy
Our database is built with PostgreSQL. PostgreSQL can be installed [here](https://www.postgresql.org/download/). Once installed, run the command:
- `psql "sslmode=disable dbname=vfmcs1 user=guest hostaddr=34.134.101.113"`
(Please note that currently your address or network must be whitelisted before being able to connect.)

Enter '**guestpass**' when prompted for the password. You should now be connected and able to query the database.
An example query:

- `SELECT username FROM users WHERE is_vendor = true;`

This returns our users that are vendors.


