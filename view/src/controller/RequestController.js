import { router } from '../main'

const BASE_URL = 'http://localhost:3000'
const API_URL = BASE_URL + '/v1/people'

export default {
  list(context) {
    context.$http.get(API_URL)
      .then((response) => {
        // response {success, results{data[], message}
        // context.response = response
        console.log(response);
      })
  },
  get(context, data) {
    context.$http.get(API_URL + '/' + data.id)
      .then((response) => {
        // response {success, data{data{}}, message}
        console.log(response);
      })
  },
  post(context, data) {
    context.$http.post(API_URL, data)
      .then((request, response) => {
        // response {success, data{data{}}, message}
        console.log(response);
        router.replace({ name: 'home'})
      })
  },
  update(context, data) {
    context.$http.put(API_URL + '/' + data.id)
      .then((response) => {
        // response {success, data_changed{}, new_data{data{}}, message}
        console.log(response);
        router.replace({ name: 'description'})
      })
  },
  delete(context, data) {
    context.$http.delete(API_URL + '/' + data.id)
      .then((response) => {
        // response {success, message}
        console.log(response);
        router.replace({ name: 'home'})
      })
  }
}
