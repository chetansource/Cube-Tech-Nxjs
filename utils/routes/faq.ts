import { GraphQLClient, gql } from "graphql-request";
import type { Faq } from "../types";

type FaqsResponse = {
  Faqs: {
    docs: Faq[];
  };
};

const baseUrl = "http://localhost:3001/api/graphql";

const graphQLClient = new GraphQLClient(baseUrl);

export const getFaqs = async ()  => {
  const query = gql`
    query GetFaqs {
      Faqs(limit: 10) {
        docs {
          id
          question
          answer
        }
      }
    }
  `;

  const data = await graphQLClient.request<FaqsResponse>(query);
  return data.Faqs.docs
};
