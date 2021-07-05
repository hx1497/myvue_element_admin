import request from '@/utils/request'

/*
  如果还要用 VUE_APP_BASE_API = '/dev-api'，就需要把代码改回来( url: '/vue-element-admin/user/login')，
  因为这时候的请求是要包含vue-element-admin的
*/
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
