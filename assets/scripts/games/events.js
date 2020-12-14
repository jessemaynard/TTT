'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onNewGame = function (event) {
  event.preventDefault()
  boardBox = ['', '', '', '', '', '', '', '', '']
  gameOver = false
  turnCount = 0
  $('#board').css('pointer-events', 'auto')
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

let currentPlayer = 'X'
let boardBox = ['', '', '', '', '', '', '', '', '']
let turnCount = 0
let gameOver = false

let playerTurn = function () {
  currentPlayer = 'X'
  turnCount++
  if (turnCount % 2 === 0) {
    currentPlayer = 'O'
    $('#player-turn').text('PLAYER O: ')
  } else {
    currentPlayer = 'X'
    $('#player-turn').text('PLAYER X: ')
  }
}

const onUserMove = function (event) {
  event.preventDefault()

  $('#player-message').hide()

  const index = event.target.id
  playerTurn()

  if ($(event.target).text().length === 0) {
    $(event.target).text(currentPlayer)
    const value = $(event.target).text()
    const playerMove = 'move is valid'
    console.log(playerMove)
    boardBox[index] = currentPlayer

    $('#player-message').show()

    const checkWin = function () {
      if (boardBox[index] === boardBox[0] &&
        boardBox[index] === boardBox[1] &&
        boardBox[index] === boardBox[2]) {
        $('#player-message').text(`YOU WON!`)
        gameOver = true
        $('#board').css('pointer-events', 'none')
      } else if (
        boardBox[index] === boardBox[3] &&
        boardBox[index] === boardBox[4] &&
        boardBox[index] === boardBox[5]
      ) {
        $('#player-message').text(`YOU WON!`)
        gameOver = true
        $('#board').css('pointer-events', 'none')
      } else if (
        boardBox[index] === boardBox[6] &&
        boardBox[index] === boardBox[7] &&
        boardBox[index] === boardBox[8]
      ) {
        $('#player-message').text(`YOU WON!`)
        gameOver = true
        $('#board').css('pointer-events', 'none')
      } else if (
        boardBox[index] === boardBox[0] &&
        boardBox[index] === boardBox[3] &&
        boardBox[index] === boardBox[6]
      ) {
        $('#player-message').text(`YOU WON!`)
        gameOver = true
        $('#board').css('pointer-events', 'none')
      } else if (
        boardBox[index] === boardBox[1] &&
        boardBox[index] === boardBox[4] &&
        boardBox[index] === boardBox[7]
      ) {
        $('#player-message').text(`YOU WON!`)
        gameOver = true
        $('#board').css('pointer-events', 'none')
      } else if (
        boardBox[index] === boardBox[2] &&
        boardBox[index] === boardBox[5] &&
        boardBox[index] === boardBox[8]
      ) {
        $('#player-message').text(`YOU WON!`)
        gameOver = true
        $('#board').css('pointer-events', 'none')
      } else if (
        boardBox[index] === boardBox[0] &&
        boardBox[index] === boardBox[4] &&
        boardBox[index] === boardBox[8]
      ) {
        $('#player-message').text(`YOU WON!`)
        gameOver = true
        $('#board').css('pointer-events', 'none')
      } else if (
        boardBox[index] === boardBox[2] &&
        boardBox[index] === boardBox[4] &&
        boardBox[index] === boardBox[6]
      ) {
        $('#player-message').text(`YOU WON!`)
        gameOver = true
        $('#board').css('pointer-events', 'none')
      }
        let gameDraw = !boardBox.includes('')
        if (gameDraw) {
        $('#player-message').text('ALL SQUARE!, PLAY AGAIN')
        $('.row').on('click', function () {
          $('#player-message').text('PRESS RESTART')
          $('#board').css('pointer-events', 'none')
        })
        gameOver = true
      }
    }
    checkWin(boardBox)

    api.userMove(index, currentPlayer, gameOver)
      .then(ui.onUpdateGameSucces)
      .catch(ui.onUpdateGamefailure)
  } else {
    $(event.target).off()
    $(playerTurn).off()
    const playerMove = 'move is invalid'
    console.log(playerMove)
    $('#player-message').show()
    $('#player-message').text('invalid move')
  }
}

module.exports = {
  onNewGame,
  onUserMove
}
