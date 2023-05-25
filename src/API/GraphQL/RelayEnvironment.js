import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const fetchCheckInQuery = async (operation, variables) => {
  const response = await fetch('https://profound-marmot-29.hasura.app/v1beta1/relay', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });

  const data = await response.json();

  if (data.errors) {
    throw new Error(JSON.stringify(data.errors));
  }

  return data;
};

const network = Network.create(fetchCheckInQuery);
const store = new Store(new RecordSource());
const environment = new Environment({ network, store });

export default environment;

//-------------------End Points-------------------------\\
import { graphql } from "react-relay";


export const CheckInQuery = graphql`
query RelayEnvironmentQuery {
  check_in_connection(order_by: {created_at: desc}) {
    edges {
      node {
        id
        comment
        created_at
        image_url
        name
        updated_at
      }
    }
  }
}
`;


export const Add_check_in = graphql`
mutation RelayEnvironmentAddCheckInMutation($name: String!, $comment: String!, $image_url: String!) {
  insert_check_in_one(object: { name: $name, comment: $comment, image_url: $image_url }) {
    name
    image_url
    comment
  }
}

`;

