# 7.6 Content Negotiation

## Objective
Demonstrate Content Negotiation in Spring REST, allowing clients to receive responses in JSON or XML format based on the `Accept` header.

## Key Technologies Used
- Java 17
- Spring Web (`produces`, `consumes`, `MediaType`)
- `jackson-dataformat-xml` (Jackson XML dependency)

## Implementation Details
- `StudentController.java`: Endpoints specifying `produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE }`.

## Expected Output
- HTTP Request with `Accept: application/json` returns JSON output:
  ```json
  {"id":1,"name":"Sarah Jenkins","email":"sarah@cognizant.com","course":"Cloud Native Java"}
  ```
- HTTP Request with `Accept: application/xml` returns XML output:
  ```xml
  <StudentDTO>
      <id>1</id>
      <name>Sarah Jenkins</name>
      <email>sarah@cognizant.com</email>
      <course>Cloud Native Java</course>
  </StudentDTO>
  ```
