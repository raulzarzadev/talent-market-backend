# Talent Market

# REST API

This is a bare-bones example of a Sinatra application providing a REST
API to a DataMapper-backed model.

## Usage

    docker pull raulzarza/talent-market:latest

- Also you can download this repository

## Docker Compose

    version: "3.8"

    services:
    talent-market:
    image: raulzarza/talent-market:latest
    env_file:
      - .env
    ports:
      - "<SERVER_PORT>:3001"

## Enviroments Variables

    ## mongodb+srv://<user>:<password>@<closter>.mongodb.net/<database-name>?retryWrites=true&w=majority
    MONGO_DB
    ## default 3001
    PORT

# REST API Short

    GET /api/talent ## params {_id, rol, name}
    POST /api/talent
    DELETE /api/talent/:id
    PUT /api/talent/:id ## body { talent }

# REST API

## Talent Endpoints

###

`GET /api/talent`

Get all users

`GET /api/talent?_id=id`

Will bring an array with element that match width \_id

### Request

    /

### Response

[

    {
       "rol": [],
      "location": [],
      "assignedTo": "",
      "recruitedBy:"",
      "_id": "",
      "name": "",
      "assignments":[]
    }

]

`POST /api/talent`

Create new user

### Request

    {
        "name": string,
        "rol": array
    }

### Response

    {
        ok: boolean,
        type: string
    }

`DELETE /api/talent/:id`

Delete user by id

### Request 

    /:id

### Response

    {
        ok: boolean,
        type: string,
    }



`PUT /api/user/:id`

Delete talent by id

### Request 

    /:id

### Response

    {
        ok: boolean,
        type: string,
        data: new
    }
