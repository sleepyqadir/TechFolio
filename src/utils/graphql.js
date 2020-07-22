/*=====================
    Fetch Repo Query
==========================*/

import { gql } from "apollo-boost";
export const FETCH_REPOS = gql`
  query FetchQuery($login: String!, $first: Int!) {
    user(login: $login) {
      pinnedItems(first: $first, types: [REPOSITORY]) {
        totalCount
        edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
  }
`;
