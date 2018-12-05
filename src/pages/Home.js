import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const getResources = gql`
  query {
    resources {
      id,
      title,
      author,
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
                        title,
                        author,
                      }) => (
                        <li key={id}>{title} - {author}</li>
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
