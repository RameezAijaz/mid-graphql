# Mini Incident Dashboard GraphQL Service

This project demonstrates a simple GraphQL API built using TypeScript. It manages incidents, including functionalities for querying, adding, updating, and deleting incidents. The incidents are paginated and can be filtered by severity and status.

## Table of Contents

- [Project Setup](#project-setup)
- [Running the Project](#running-the-project)
- [Directory Structure](#directory-structure)
- [Approach](#approach)
- [GraphQL Schema](#graphql-schema)

## Project Setup

### Prerequisites

To get started, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (package managers)

### Steps to Setup

1. **Clone the repository**:

   Clone the project repository to your local machine:

   ```bash
   git clone https://github.com/RameezAijaz/mid-graphql.git
   ```

2. **Install dependencies**:

   Navigate to the project directory and install the dependencies:

   ```bash
   cd mid-graphql
   npm install
   ```

4. **Start the server**:

   ```bash
   npm start
   ```

   The server should now be running at `http://localhost:4000`.

## Running the Project

Once the project is set up and the server is running, you can test the GraphQL API by navigating to the following URL in your browser:

```
http://localhost:4000/graphql
```
Click on "Query your server"
You can use this URL to interact with the GraphQL API using queries and mutations.

### Example Queries & Mutations

Here are some sample GraphQL queries and mutations you can try out:

#### Query to Get Paginated Incidents

```graphql
query {
  getIncidents(page: 1, limit: 5, status: "OPEN") {
    incidents {
      id
      title
      description
      severity
      status
    }
    total
  }
}
```

#### Mutation to Add a New Incident

```graphql
mutation {
  addIncident(title: "New Incident", description: "Details of the incident", severity: "HIGH", status: "OPEN") {
    id
    title
    description
    severity
    status
  }
}
```

#### Mutation to Update an Incident

```graphql
mutation {
  updateIncident(id: "1", title: "Updated Incident", severity: "MEDIUM", status: "CLOSED") {
    id
    title
    severity
    status
  }
}
```

#### Mutation to Delete an Incident

```graphql
mutation {
  deleteIncident(id: "1")
}
```

## Directory Structure

The project follows a simple directory structure for easy maintenance and scalability.

```
/mid-graphql
├── /src
│   ├── /incidents/data              # Sample data (in-memory storage for incidents)
│   ├── /incidents/resolvers         # Incidents related GraphQL resolvers for queries and mutations
│   ├── /incidents/types             # Incidents related TypeScript types for incidents and GraphQL arguments
│   ├── /incidents/schema.ts         # Incidents related GraphQL schema definition (SDL)
│   └── /index.ts                    # Main entry point of the application (Apollo Server setup)
├── /node_modules          # Dependencies (installed by npm or yarn)
├── /package.json          # Project metadata and dependencies
├── /tsconfig.json         # TypeScript configuration
└── /README.md             # This file
```

## Approach

1. **GraphQL Schema**:
    - The GraphQL schema is written using SDL (Schema Definition Language) to define types, queries, mutations, and enums.
    - We have types like `Incident`, `Severity`, `Status`, and queries like `getIncidents` with support for pagination and filtering by `status` and `severity`.

2. **Resolvers**:
    - Resolvers define the logic for each GraphQL operation. In this project, we have queries for fetching incidents and mutations for adding, updating, and deleting incidents.
    - Pagination is implemented for the `getIncidents` query to fetch incidents in chunks.
    - Filtering is added to allow users to filter incidents by `status` and `severity`.

3. **TypeScript**:
    - TypeScript is used to ensure type safety, which helps prevent runtime errors and provides better developer experience with autocomplete and type-checking.
    - Types for the incidents, arguments, and return types are defined in separate files for better modularity.

4. **In-memory Data**:
    - Currently, incidents are stored in memory (in the `data.ts` file) rather than a database. This allows for a quick setup, but in a real-world application, this would likely be replaced by a database.

5. **Apollo Server**:
    - Apollo Server is used to set up the GraphQL API. The server is initialized in `index.ts` with the schema and resolvers.
