import API from './index'
import awaitToData from '../utils/await-to-data'

export default {
  getBaseResource(urlSegment = '') {
    const BASE_RESOURCE = 'events'
    return `${BASE_RESOURCE}/${urlSegment}`
  },

  index(params = {}) {
    return awaitToData(API.get(this.getBaseResource(), params))
  },

  show(id) {
    return awaitToData(API.get(this.getBaseResource(id)))
  },

  create(data) {
    return awaitToData(API.post(this.getBaseResource(), { data }))
  },

  update(id, data) {
    return awaitToData(API.put(this.getBaseResource(id), { data }))
  },

  destroy(id) {
    return awaitToData(API.delete(this.getBaseResource(id)))
  },
}
