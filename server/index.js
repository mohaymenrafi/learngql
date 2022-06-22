const { graphqlHTTP } = require('express-graphql');
const express = require('express');
const colors = require('colors');
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();
const schema = require('./schema/schema');
const connectDB = require('./config/db');

const port = process.env.PORT || 5000;

const app = express();
// Connect to dB
connectDB();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(port, console.log(`the server is running at port: ${port}`));
