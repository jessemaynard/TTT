'use strict'
const config = require('./../config')
const store = require('./../store')

const signUp = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}
const signIn = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}
const signOut = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const changePassword = function (data) {
  // console.log(store.user)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
