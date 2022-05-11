// import the gql tagged template function
const { gql } = rewuire('apollo-server-express');

// create our typeDefs
const typedefs = gql `
type Query {
    helloWorld: String
}
`;

// export the typeDefs
module.exports = typeDefs;