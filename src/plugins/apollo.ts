import ApolloClient from 'apollo-boost';
import Vue from 'vue';
import VueApollo from 'vue-apollo';

// Install Plugin
Vue.use(VueApollo)

// Create Client
let client: null | ApolloClient<any> = null

export function getClient() {
  if (client === null) {
    client = new ApolloClient({
      uri: 'https://ec-api.de/graphql' //Direkter API-Request
      // uri: 'http://ec-api.de:4000/graphql' //Dev API
      // uri: 'https://localhost/graphql'//Locale API
    })
  }
  return client
}

// Create Client
export default () => {
  return new VueApollo({
    defaultClient: getClient()
  })
}
