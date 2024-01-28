const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: [Book]!
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    book(username: String): [Book]
    book(bookId: ID!): Book
    me: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(description: String!): Book
    deleteBook(bookId: ID!, userId: ID!): Book
  }
`;

module.exports = typeDefs;
