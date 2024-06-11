const typeDefs = `#graphql
  type LocalizedName {
    firstName: String!
    fatherName: String!
    grandfatherName: String!
    familyName: String!
  }

  type NationalId {
    idNumber: String!
    expiryDate: String!
  }

  type Country {
    id: ID!
    name: String!
  }

  type Nationality {
    country: Country!
    countryId: Int!
  }

  type MaritalStatus {
    id: ID!
    name: String!
  }

  type User {
    firstName: String!
    fatherName: String!
    grandfatherName: String!
    familyName: String!
    localizedName: LocalizedName!
    nationalId: NationalId!
    nationalities: [Nationality!]!
    maritalStatus: MaritalStatus!
    dependants: Int!
  }

  type Query {
    user(id: Int!): User
  }
`;

export default typeDefs;
