'use strict'
const store = require('./../store')

const newGameSuccess = function (data) {
  $('#game-message').text('')
  $('#game-message').slideDown(4000)
  $('#board').show()
  store.game = data.game
  $('.box').empty()
}
const newGameFailure = function (error) {
  $('#message').text('NOT QUITE, TRY AGAIN: ' + error.responseJSON.message)
}
const onUpdateGameSuccess = function (data) {
  $('#message').hide()
  store.game = data.game
  const gameOver = data.game.over
}
const onUpdateGameFailure = function (error) {
  $('#message').text('NOT QUITE, TRY AGAIN: ' + error.responseJSON.message)
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
