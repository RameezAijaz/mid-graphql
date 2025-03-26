import { gql } from 'apollo-server';

export const typeDefs = gql`
  enum Severity {
    LOW
    MEDIUM
    HIGH
  }

  enum Status {
    OPEN
    CLOSED
  }

  type Incident {
    id: ID!
    title: String!
    description: String!
    severity: Severity!
    status: Status!
  }

  type PaginatedIncidents {
    incidents: [Incident!]!
    total: Int!
  }

  type Query {
    getIncidents(
      page: Int!
      limit: Int!
      status: Status
      severity: Severity
    ): PaginatedIncidents!
  }

  type Mutation {
    addIncident(
      title: String!
      description: String!
      severity: Severity!
      status: Status!
    ): Incident!
    updateIncident(
      id: ID!
      title: String
      description: String
      severity: Severity
      status: Status
    ): Incident!
    deleteIncident(id: ID!): Boolean!
  }
`;
