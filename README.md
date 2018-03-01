# HTTP-code specific classes to format unified AJAX error response

For NodeJS, Typescript applications.

Return unified response on backend error.

## HTTP code 400, 404, 5xx

Response:
```json
{
  "code": "NotFound",
  "message": "Requested entity is not found"
}

```

## HTTP code 422 request payload validation error

Response:
```json
{
  "code": "Validation",
  "validationErrors": {
    "field": ["Field is required", "Value must be integer"]
  }
}

```
