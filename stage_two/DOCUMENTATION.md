# CRUD API Documentation

This documentation provides details on how to use the CRUD (Create, Read, Update, Delete) API for managing persons. This API allows you to perform various operations on person records.

## API Endpoints

## Create a New Student

- **Endpoint**: POST baseurl/api
- **Request Body**: JSON object containing student details (name, email,track).
- **Response**: Returns the created student with a status code of 200 (Created).

## Get all Students

- **Endpoint**: GET baseurl/api
- **Request Body**: Body of request is empty
- **Response**: Returns all students in the database with a status code of 200 (Created).

## Get one Student by name

- **Endpoint**: GET baseurl/api/studentName
- **Request Body**: Body of request is empty
- **Response**: Returns student information with status code 200 if in database, else an error message with status code 404.

## Update a Student Information by name

- **Endpoint**: PUT baseurl/api/studentName.
- **Request Body**: JSON object containing updated student details.
- **Response**: Returns updated student information with status code 200 if studentName exists in database, else an error message with status code 404.

## Delete a Student Information by name

- **Endpoint**: DELETE baseurl/api/studentName.
- **Request Body**: Body of request is empty
- **Response**: Returns deleted student information with status code 200 if studentName exists in database, else an error message with status code 404.

## How To Test Automatically

- Import the POSTMAN collection.
- Click on the dropdown of the collection and then click on generate tests.
- locate run collection on the top right corner of POSTMAN
