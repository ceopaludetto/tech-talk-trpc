import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  starWars: Array<StarWarsPerson>;
};

export type StarWarsPerson = {
  __typename?: 'StarWarsPerson';
  birth_year: Scalars['String'];
  eye_color: Scalars['String'];
  gender: Scalars['String'];
  hair_color: Scalars['String'];
  height: Scalars['String'];
  mass: Scalars['String'];
  name: Scalars['String'];
  skin_color: Scalars['String'];
};

export type StarWarsQueryVariables = Exact<{ [key: string]: never; }>;


export type StarWarsQuery = { __typename?: 'Query', starWars: Array<{ __typename?: 'StarWarsPerson', name: string, height: string, mass: string, hair_color: string, skin_color: string, eye_color: string, birth_year: string, gender: string }> };


export const StarWarsDocument = gql`
    query StarWars {
  starWars {
    name
    height
    mass
    hair_color
    skin_color
    eye_color
    birth_year
    gender
  }
}
    `;

/**
 * __useStarWarsQuery__
 *
 * To run a query within a React component, call `useStarWarsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStarWarsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStarWarsQuery({
 *   variables: {
 *   },
 * });
 */
export function useStarWarsQuery(baseOptions?: Apollo.QueryHookOptions<StarWarsQuery, StarWarsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StarWarsQuery, StarWarsQueryVariables>(StarWarsDocument, options);
      }
export function useStarWarsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StarWarsQuery, StarWarsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StarWarsQuery, StarWarsQueryVariables>(StarWarsDocument, options);
        }
export type StarWarsQueryHookResult = ReturnType<typeof useStarWarsQuery>;
export type StarWarsLazyQueryHookResult = ReturnType<typeof useStarWarsLazyQuery>;
export type StarWarsQueryResult = Apollo.QueryResult<StarWarsQuery, StarWarsQueryVariables>;