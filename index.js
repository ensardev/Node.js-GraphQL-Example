const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// GraphQL Schema
const schema = buildSchema(`
    type Movie {
        id: ID!
        title: String!
        director: String!
        year: Int!
    }

    type Query {
        movie(id: ID!): Movie
        movies: [Movie]
    }

    type Mutation {
        addMovie(title: String!, director: String!, year: Int!): Movie
        updateMovie(id: ID!, title: String, director: String, year: Int): Movie
    }
`);

// Movie Datas
const movies = [
    { id: '1', title: 'The Lord of the Rings: The Fellowship of the Ring', director: 'Peter Jackson', year: 2001 },
    { id: '2', title: 'The Shawshank Redemption', director: 'Frank Darabont', year: 1994 },
];

// Resolver Functions
const root = {
    movie: ({ id }) => movies.find(movie=> movie.id === id),
    movies: () => movies,
    addMovie: ({ title, director, year }) => {
        const newMovie = { id: movies.length + 1, title, director, year };
        movies.push(newMovie);
        return newMovie;
    },
    updateMovie: ({ id, title, director, year }) => {
        const movieIndex = movies.findIndex(movie=> movie.id === id);
        if (movieIndex === -1) throw new Error('Film bulunamadı');
        const updateMovie = { ...movies[movieIndex], title, director, year };
        movies[movieIndex] = updateMovie;
        return updateMovie;
    },
};


const app = express();

// GraphQL Middleware
app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);

// Listen Server
app.listen(3000, () => {
    console.log('API run on port :3000. API Url : http://localhost:3000/graphql');
});