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

    GET /api/user ## params {_id, rol, name}
    POST /api/user
    DELETE /api/user/:id


    GET /api/candidate ## params {_id, rol, name}
    POST /api/candidate
    DELETE /api/candidate/:id

# REST API

## User Endpoints

###

`GET /api/user`

Get all users

`GET /api/user?_id=id`

Will bring an array with element that match width \_id

### Request

    /

### Response

[

    {
       "rol": [],
      "location": [],
      "assignedTo": "",
      "_id": "",
      "name": "",
    }

]

`POST /api/user`

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

`DELETE /api/user/:id`

Delete user by id

### Request

    /:id

### Response

    {
        ok: boolean,
        type: string,
    }

## Candidates Endpoints

###

###

`GET /api/candidate`

Get all Candidates

`GET /api/candidate?_id=id`

Will bring an array with element that match width \_id

### Request

    /

### Response

[

    {
       "rol": [],
      "location": [],
      "assignedTo": "",
      "_id": "",
      "name": "",
    }

]

`POST /api/candidate`

Create new candidate

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

`DELETE /api/candidate/:id`

Delete candidate by id

### Request

    /:id

### Response

    {
        ok: boolean,
        type: string,
    }
