'use strict'

const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('READY FOR DEPLOYMENT')

  $('form').trigger('reset')
}
const signUpFailure = function (error) {
  $('#message').text('NOT QUITE TRY AGAIN: ' + error.responseJSON.message)
}
const signInSuccess = function (response) {
  $('#message').text('LETS PLAY!')
  $('#message').fadeOut(500)

  store.user = response.user

  $('.existing').show()
  $('#board').hide()
  $('.unauthenticated').hide()
}

const signInFailure = function (error) {
  $('#message').text('NOT QUITE, TRY AGAIN: ' + error.responseJSON.message)
}
const signOutSuccess = function () {
  console.log('')
  $('#message').text('COME BACK SOON')

  $('.existing').hide()
  $('.unauthenticated').show()
  $('#message2').hide()

  store.user = null

  $('form').trigger('reset')
}
const signOutFailure = function (error) {
  $('#message').text('Sign out fail: ' + error.responseJSON.message)
}
const changePasswordSuccess = function () {
  $('#message').text('ALL CHANGED')

  $('form').trigger('reset')
}
const changePasswordFailure = function (error) {
  $('#message').text('NOT QUITE, TRY AGAIN: ' + error.responseJSON.message)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
