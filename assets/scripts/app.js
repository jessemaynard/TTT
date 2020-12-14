'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./games/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('.existing').hide()
  $('#new-game').on('submit', gameEvents.onNewGame)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('.row').on('click', gameEvents.onUserMove)
  $('.row').on('click', gameEvents.checkWin)
  $('#change-password').on('submit', authEvents.onChangePassword)

})
