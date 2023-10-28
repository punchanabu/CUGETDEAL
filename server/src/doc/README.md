# Backend Documentation

## Router Endpoints
### 1. User Registration
- Endpoint: `/register`
- Method: POST
- URL: `http://localhost:3222/register`
- Headers:
    - Content-Type: `application/json`
- Request Body
    ```json
    {
        "name": "Pun",
        "surname": "pun",
        "email": "pun@example.com",
        "password": "password123"
    }
    ```
Note: If the user already exists, this step can be skipped.

### 2. User login
- Endpoint:`/login`
- Method: POST
- URL: `http://localhost:3222/login`
- Headers:
    - Content-Type: `application/json`
- Request Body:
    ```json
    {
        "email": "pun@example.com",
        "password": "password123"
    }
    ```
Note: Upon successful login, a `JWT_token` will be returned. This token is required for authentication when creating and fetching data.

### 3. create data in dashboard
- Endpoint: `/dashboard`
- Method: POST
- URL: `http://localhost:3000/dashboard`
- Headers:
    - Content-Type: `application/json`
    - Authorization: `Bearer <JWT_token>`
- Request Body:
    ```json
    {
        "userId": "<user_id>",
        "JobAssign": [
            {
                "title": "Task 1",
                "description": "Description for Task 1",
                "star": 3,
                "status": "Pending"
            }
        ],
        "UserJob": [
            {
                "title": "Job 1",
                "description": "Description for Job 1",
                "star": 5,
                "contact": {
                    "phone": "123-456-7890",
                    "email": "contact@example.com",
                    "instagram": "@example"
                }
            }
        ]
    }
    ```
Note:Ensure to replace `<user_id>` and `<jwt_token>` with actual values when making requests to the backend endpoints.

### 4. fecth data from dashboard
- Endpoint: `/dashboard/<user_id>`
- Method: GET
- URL: `http://localhost:3000/dashboard/<user_id>`
- Headers:
    - Content-Type: `application/json`
    - Authorization: `Bearer <jwt_token>`

Note:Ensure to replace `<user_id>` and `<jwt_token>` with actual values when making requests to the backend endpoints.

in this document
- `<user_id>`:  refers to the ID of the user in the usersSchema database (eg. `653bbc35c6aa2a57043e50cc`).

- `<JWT_token>`: refers to the JWT token generated upon login (e.g. `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M2NiMzg3YjI2ZjlmZjI3OWI4MTBmZCIsIm5hbWUiOiJQdW4iLCJzdXJuYW1lIjoicHVuIiwiZW1haWwiOiJwdW5AZXhhbXBsZS5jb20iLCJpYXQiOjE2OTg0NzY5NTAsImV4cCI6MTY5ODU2MzM1MH0.FkHgZ1lyTc2Yr5ewRMpybmybLL_1BBqi-xqZlkaZrNw`).