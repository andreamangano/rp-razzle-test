import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import ResourceCard from '../components/resourceCard/ResourceCard'

// @TODO: use fragment
const getResources = gql`
  query {
    resources {
      title,
      author,
      abstract,
      tags,
      slug,
      publishedAt,
    }
  }
`

class Home extends React.Component {
  
  render() {
    
    return (
      <Query query={getResources}>
          {({ loading, error, data, fetchMore, client }) => {
              if (loading) {
                  return (
                    <div>loading...</div>
                  )
              }
              if (error) {
                return (
                  <div>Error</div>
                )
              }
              return (
                <div>
                  <h1>Homepage</h1>
                  <ul>
                    {
                      data.resources.map(({
                        id,
                        ...rest,
                      }) => (
                        <li key={id}>
                          <ResourceCard
                            {...rest}
                          />
                        </li>
                      ))
                    }
                  </ul>
                </div>
              )
          }}
      </Query>
    );
  }
}


export default Home
