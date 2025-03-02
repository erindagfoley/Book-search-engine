import gql from 'graphql-tag';

const typeDefs = gql`
  type Book {
    _id: ID!
    bookID: String!
    title: String!
    authors: [String!]!
    description: String!
    image: String!
    link: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book!]!
    bookCount: Int
  }

  type Query {
    getSingleUser(_id: String!, username: String!): User
    login(username: String!, email: String!)
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    saveBook(_id: String!, savedBooks: [Book!]!): Book
    deleteBook(_id: String!, bookID: String!): Book
  }

  export default typeDefs;