import axios from 'axios'
var restApi = "/osc/v1/rest_api"
var payload = {
  'function': '',
  'args': [],
  'kwargs': ''
}
//行情图表 api
export const websocket = params => {
  return axios.post('/api/websocket$', params).then(res => res.data)
}

// register
export const register = kwargs => {
  payload.function = "register"
  payload.kwargs = kwargs
  console.log(payload.kwargs)
  return axios.post(restApi, payload).then(res => res.data).catch(err => {
    if(err.response) {
      return err.response.data
    }
  })
}
//active user
export const activeUser = kwargs => {
  payload.function = "active_user"
  payload.kwargs = kwargs
  return axios.post(restApi, payload).then(res => res.data).catch(err => {
    if(err.response) {
      return err.response.data
    }
  })
}
//send email reset
export const sendEmail = kwargs => {
  payload.function = "send_mail"
  payload.kwargs = kwargs
  return axios.post(restApi, payload).then(res => res.data).catch(err => {
    if(err.response) {
      return err.response.data
    }
  })
}
//send setting password
export const resetPassword = kwargs => {
  payload.function = "reset_password"
  payload.kwargs = kwargs
  return axios.post(restApi, payload).then(res => res.data).catch(err => {
    if(err.response) {
      return err.response.data
    }
  })
}
// login
export const login = kwargs => {
  payload.function = "login"
  payload.kwargs = kwargs
  return axios.post(restApi, payload).then(res => res.data).catch(err => {
    if(err.response) {
      return err.response.data
    }
  })
}
// k line api
export const getKline = params => {
  return axios.post('/api/kline', params).then(res => res.data);
};
//get ga_key
export const getKey = kwargs => {
  payload.function = "get_ga_key"
  payload.kwargs = kwargs
  return axios.post(restApi, payload).then(res => res.data).catch(err => {
    if(err.response) {
      return err.response.data
    }
  })
}
//bind ga_key
export const bindKey = kwargs => {
  payload.function = "bind_ga_key"
  payload.kwargs = kwargs
  return axios.post(restApi, payload).then(res => res.data).catch(err => {
    if(err.response) {
      return err.response.data
    }
  })
}
//unbind ga_key
export const unbind = kwargs => {
  payload.function = "unbind_ga_key"
  payload.kwargs = kwargs
  return axios.post(restApi, payload).then(res => res.data).catch(err => {
    if(err.response) {
      return err.response.data
    }
  })
}
//getWallet
export const getWallet = kwargs => {
  payload.function = "get_wallet"
  payload.kwargs = kwargs
  return axios.post(restApi, payload).then(res => res.data).catch(err => {
    if(err.response) {
      return err.response.data
    }
  })
}
//createWallet
export const createWallet = kwargs => {
  payload.function = "create_wallet"
  payload.kwargs = kwargs
  return axios.post(restApi, payload).then(res => res.data).catch(err => {
    if(err.response) {
      return err.response.data
    }
  })
}
 //withdraw
export const withdraw = kwargs => {
  payload.function = "withdraw"
  payload.kwargs = kwargs
  return axios.post(restApi, payload).then(res => res.data).catch(err => {
    if(err.response) {
      return err.response.data
    }
  })
}
