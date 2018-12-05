
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import 'isomorphic-fetch'

export default new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: ApolloLink.from([
        new HttpLink({
            uri: 'https://api-euwest.graphcms.com/v1/cjpb4lhrh0yi201g0rv8k9j1g/master'
        })
    ]),
    cache:
        process.browser && typeof window !== 'undefined'
            ? new InMemoryCache().restore(window.__APOLLO_STATE__)
            : new InMemoryCache()
})