/**
 * This utility handles requests to minimize API calls via async await.
 */
export default async promise => {
  try {
    return await promise
  } catch (error) {
    if (error.response) { return error.response.data }
    throw error
  }
}
