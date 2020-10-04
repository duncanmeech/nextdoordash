import { QueryResult } from "@apollo/react-common";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const cart = gql`
  query {
    cart {
      items {
        name
        displayPrice
        id
      }
    }
  }
`;

const useCartQuery = ({ skipQuery = false }) => {
  return useQuery(cart, {
    fetchPolicy: "network-only",
    notifyOnNetworkStatusChange: true,
    skip: skipQuery,
  });
};

export default useCartQuery;
