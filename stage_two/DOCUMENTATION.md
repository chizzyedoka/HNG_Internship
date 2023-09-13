# CRUD API Documentation

This documentation provides details on how to use the CRUD (Create, Read, Update, Delete) API for managing persons. This API allows you to perform various operations on person records.

## API Endpoints

## Create a New Student

- <bold>Endpoint</bold>: POST baseurl/api
- <bold>Request Body</bold>: JSON object containing student details (name, email,track).
- <bold>Response</bold>: Returns the created student with a status code of 200 (Created).

## Get all Students

- <bold>Endpoint</bold>: GET baseurl/api
- <bold>Request Body</bold>: Body of request is empty
- <bold>Response</bold>: Returns all students in the database with a status code of 200 (Created).

## Get one Student by name

- <bold>Endpoint</bold>: GET baseurl/api/studentName
- <bold>Request Body</bold>: Body of request is empty
- <bold>Response</bold>: Returns student information with status code 200 if in database, else an error message with status code 404.

## Update a Student Information by name

- <bold>Endpoint</bold>: PUT baseurl/api/studentName.
- <bold>Request Body</bold>: JSON object containing updated student details.
- <bold>Response</bold>: Returns updated student information with status code 200 if studentName exists in database, else an error message with status code 404.

## Delete a Student Information by name

- <bold>Endpoint</bold>: DELETE baseurl/api/studentName.
- <bold>Request Body</bold>: Body of request is empty
- <bold>Response</bold>: Returns deleted student information with status code 200 if studentName exists in database, else an error message with status code 404.
