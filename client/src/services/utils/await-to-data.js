/**
 * This utility handles requests to minimize API calls via async await.
 */
export default async promise => {
  const response = {}
  try {
    const {data} = await promise
    response.data = data
  } catch (e) {
    response.errors = e.errors
  }
  return response
}