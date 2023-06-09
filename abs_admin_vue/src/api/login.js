import request from '@/utils/request'

const userApi = {
  // Login: '/auth/login',
  // Logout: '/auth/logout',
  // ForgePassword: '/auth/forge-password',
  // Register: '/auth/register',
  // SendSms: '/account/sms',
  // SendSmsErr: '/account/sms_err',
  // // get my info
  // UserInfo: '/user/info',
  // UserMenu: '/user/nav'

  Login: '/admin/sys_login',
  Logout: 'Logout',
  ForgePassword: '/admin/forge-password',
  Register: '/admin/register',
  SendSms: '/admin/sms',
  SendSmsErr: '/admin/sms_err',
  // get my info
  UserInfo: '/admin/sys_user_info',
  UserMenu: '/admin/user/nav'
}

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export function login(parameter) {
  return request({
    url: userApi.Login,
    method: 'post',
    data: parameter
  })
}

export function getSmsCaptcha(parameter) {
  return request({
    url: userApi.SendSms,
    method: 'post',
    data: parameter
  })
}

export function getInfo() {
  return request({
    url: userApi.UserInfo,
    method: 'post',
    data: {}
  })
}

export function getCurrentUserNav() {
  return request({
    url: userApi.UserMenu,
    method: 'get'
  })
}

export function logout() {
  return request({
    url: userApi.Logout,
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

