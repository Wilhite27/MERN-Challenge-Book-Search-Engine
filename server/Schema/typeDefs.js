const { gql } = require('apollo-server-express');
const typeDefs = gql`

type Book {
    _id: Id!
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

type Auth {
    token: Id!
    user: User
}

type Mutation {
    login(email:String!, password: String!); Auth
    addUser(username:String!, email: String!, password:String!); Auth
    saveBook( input: saveBook!); User
    removeBook(bookId: Id!); User
}

type User {
    _id: Id!,
    username: String,
    email: String,
    bookCount: Int,
    savedBooks: [Book]
}
`;
module.exports = typeDefs;