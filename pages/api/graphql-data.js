import { ApolloServer, gql } from "apollo-server-micro";

let items = [
  {
    name: "The Hungarian Sausage",
    displayPrice: "$9.99",
    id: "1234",
  },
  {
    name: "The British Banger",
    displayPrice: "$1.99",
    id: "2345",
  },
];

const typeDefs = gql`
  type CartItem {
    name: String
    displayPrice: String
    id: String
  }
  type Cart {
    items: [CartItem]
  }
  type Query {
    cart: Cart
  }
`;

const resolvers = {
  Query: {
    cart: () => {
      return { items };
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const handler = server.createHandler({ path: "/api/graphql-data" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
