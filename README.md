# Talent Market

# REST API

This is a bare-bones example of a Sinatra application providing a REST
API to a DataMapper-backed model.

## Usage

    docker pull raulzarza/talent-market:latest

* Also you can download this repository 


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

    GET /api/user
    POST /api/user
    GET /api/user/:id
    DELETE /api/user/:id


    GET /api/candidate
    POST /api/candidate
    GET /api/candidate/:id
    DELETE /api/candidate/:id


# REST API

## User Endpoints

###

`GET /api/user`

Get all users

### Request

    /

### Response

    {
        ok: boolean,
        type: string,
        data: Array
    }

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

`GET /api/user/:id`

Get user by id

### Request

    /:id

### Response

     {
        "name": string,
        "rol": array
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

`GET /api/candidate`

Get all candidates

### Request

    /

### Response

    {
        ok: boolean,
        type: string,
        data: Array
    }

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

`GET /api/candidate/:id`

Get candidate by id

### Request

    /:id

### Response

     {
        "name": string,
        "rol": array
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
