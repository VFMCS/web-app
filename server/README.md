# This is the README for our Node.js Server
## See general README for info about how to install dependencies and start server
This page will be updated with more server specific documentation in the future

## How to Add an Endpoint to an Existing API
1) Locate the desired API directory (eg: server/user-api).
2) Define your sql query in queries.js as such:

        const myQuery = "SELECT * FROM example_table";

    If your query requires parameters, use `'$'` followed by consecutively increasing numbers starting at 1 as such:

        const createUser = "INSERT INTO users (username,password,first_name,last_name,address,is_vendor,about_me,email) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)";
    
    The parameters will be filled in the controllers.js file.
    
    Be sure to export your queries like this:

        module.exports = module.exports = {
            myQuery,
            myOtherQuery,
        }
3) Create a controller to handle the query in controllers.js.
    
    Basic controller structure:
        
        const makeQuery = (req,res) => {
            pool.query(queries.myQuery,(error,results) => {
                if (error) throw error;
                res.status(200).json(results.rows);
            })
        }

    To fill parameters create an array of desired values. Value1 (index 0) corresponds to `'$1'` in the query and so on. The array can be passed to pool.query() like this:

        pool.query(queries.myQuery,[value1,value2],(error,results) => {
            if (error) throw error;
            res.status(200).json(results.rows);
        })

    `req.params` can retrieve parameters from the URL for GET requests. `req.body` will return data or JSON object from client for PUT and POST requests.

    Make sure to include your controller function in the list of exports at the bottom of the file.

4) Create the route in routes.js.

    Routes are created like this:

        router.get("/",controller.makeQuery);
    
    `.get` should be substituted with the desired request type (eg: `.get`,`.post`,`.put`,`.delete`,...).

    `"/"` should be replaced with your desired **relative** path for the endpoint. The base URL for your current API is defined in app.js. 
    
    For example, the user-api URL is `localhost:{PORT}/api/users`. The `/user-api.routes.js` file defines a GET request at `"/"` which actually refers to `localhost:{PORT}/api/users`.

    Replace `.makeQuery` with the controller function you defined in `controllers.js`

## How To Define a New API
1) Create a new directory in /server.
2) In that directory create routes.js, queries.js, and controllers.js.
3) Copy this template into routes.js.

        const { Router } = require ('express');
        const controller = require('./controllers.js');

        const router = Router();

        //Define routes here

        module.exports = router;
4) Copy this template into controllers.js.
        
        const  pool = require("../db.js") 
        const queries = require("./queries.js")

        //Define controller functions here

        module.exports = {
        }
5) In quereies.js add `module.exports = {}` .
6) In app.js add 
        
        const myApiRoutes = require('./myApi/routes.js');

    and

        app.use('/desiredURL/', myApiRoutes);
7) Read above section for information on adding new endpoints to your API.
    


