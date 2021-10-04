import React from 'react'
import {ApolloClient} from 'apollo-client'
import {ApolloProvider} from 'react-apollo'
import {createHttpLink} from 'apollo-link-http'
import {setContext} from 'apollo-link-context'
import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from 'apollo-cache-inmemory'
// import fragments from './fragments.json'

const httpLink = createHttpLink({
  uri: '/graphql'
})

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const fragmentMatcher = new IntrospectionFragmentMatcher({
  // introspectionQueryResultData: fragments
})

const cache = new InMemoryCache({
  dataIdFromObject: object => object.id,
  fragmentMatcher
})

const client = new ApolloClient({
  uri: '/graphql',
  link: authLink.concat(httpLink),
  cache
})

const Apollo = ({children}) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
)
Apollo.client = client
Apollo.cache = cache

export default Apollo
