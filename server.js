const { graphql, buildSchema } = require('graphql');
// Construct a schema, using GRAPHQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);
// the root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello World!';
  }
};
// run the graphql '(hello)' and print out the response
graphql( schema, '{hello}', root ).then((response) => {
  console.log(response);
});