import api from './axiosInstance'

export const fetchKey = key => (
  new Promise((resolve, reject) => {
    api({
      url: `/key/${key}`,
      method: "GET"
    })
    .then(res => resolve(res.data))
    .catch(err => reject(new Error(getApiErrorMessage(err))))
  })
)

export const upsertKey = (key,value) => (
  new Promise((resolve, reject) => {
    api({
      url: `/key`,
      method: "POST",
      data: {
        key,
        value
      }
    })
    .then(res => resolve(res.data))
    .catch(err => reject(new Error(getApiErrorMessage(err))))
  })
)

export const getApiErrorMessage = error => {
  let messgae = ''
  if (error.response) {
    messgae = error.response.data.e.message
  } else if (error.request) {
    messgae = error.message
  } else {
    messgae = error.message
  }
  return messgae
}